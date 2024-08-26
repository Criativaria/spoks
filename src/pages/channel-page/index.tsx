import { FlatList, View } from "react-native";
import { ItemList } from "../../components/item-list";
import { PageTittle } from "../../components/page-tittle";
import { useChannel } from "./use-channel";
import { makeStyle } from "./style";

export function ChannelsPage() {
  const style = makeStyle();

  const { channelInfo } = useChannel();
  return (
    <View>
      <PageTittle arrow={false} heart={true} title="Canais" />
      <View style={style.list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={channelInfo}
          renderItem={({ item }) => (
            <ItemList title={item.name} desc={item.name} favorite={true} />
          )}
        />
      </View>
    </View>
  );
}
