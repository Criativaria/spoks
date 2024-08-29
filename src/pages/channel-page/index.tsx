import { FlatList, View } from "react-native";
import { ItemList } from "../../components/item-list";
import { PageTittle } from "../../components/page-tittle";
import { useChannel } from "./use-channel";
import { makeStyle } from "./style";
import { useState } from "react";
import { SearchBar } from "../../components/search-bar";

export function ChannelsPage() {
  const style = makeStyle();

  const { channels, searchFilter, setSearchFilter, filterChannels } =
    useChannel();

  return (
    <View>
      <PageTittle arrow={false} heart={true} title="Canais" />

      <SearchBar onChangeText={setSearchFilter} value={searchFilter} />

      <View style={style.list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterChannels()}
          renderItem={({ item }) => (
            <ItemList title={item.name} desc={item.name} favorite={false} />
          )}
        />
      </View>
    </View>
  );
}
