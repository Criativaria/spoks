import { FlatList, Pressable, TextInput, View } from "react-native";
import { ItemList } from "../../components/item-list";
import { PageTittle } from "../../components/page-tittle";
import { useChannel } from "./use-channel";
import { makeStyle } from "./style";
import { useState } from "react";
import { Search, X } from "lucide-react-native";

export function ChannelsPage() {
  const style = makeStyle();
  const [filterInfo, setFilterInfo] = useState("");

  const { channelInfo } = useChannel();
  return (
    <View>
      <PageTittle arrow={false} heart={true} title="Canais" />

      {/* parte da barra de pesquisa */}

      <View style={style.searchBarWrapper}>
        <Search color="black" />
        <TextInput
          placeholder="procurar em canais"
          style={style.searchBar}
          onChangeText={setFilterInfo}
          value={filterInfo}
        />
        <Pressable onPress={() => setFilterInfo("")}>
          <X color="black" />
        </Pressable>
      </View>

      {/* parte da barra de pesquisa */}

      <View style={style.list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={channelInfo.filter((val) => {
            if (filterInfo === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(filterInfo.toLowerCase())
            ) {
              return val;
            }
          })}
          renderItem={({ item }) => (
            <ItemList title={item.name} desc={item.name} favorite={true} />
          )}
        />
      </View>
    </View>
  );
}
