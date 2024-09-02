import { FlatList, View } from "react-native";
import { ItemList } from "../../components/item-list";
import { PageTittle } from "../../components/page-tittle";
import { useChannel } from "./use-channel";
import { makeStyle } from "./style";
import { SearchBar } from "../../components/search-bar";

export function ChannelsPage() {
  const style = makeStyle();

  const {
    searchFilter,
    setSearchFilter,
    filterChannels,
    saveFavoriteChannel,
    isFavoriteChannel,
    onlyFavorites,
    toggleOnlyFavorites,
  } = useChannel();

  return (
    <View>
      <PageTittle
        arrow={false}
        heart={true}
        title={toggleOnlyFavorites ? "Canais" : "Canais Favoritos"}
        onlyFavorites={() => onlyFavorites()}
        toogleOnlyFavorites={toggleOnlyFavorites}
      />

      <SearchBar onChangeText={setSearchFilter} value={searchFilter} />

      <View style={style.list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterChannels()}
          renderItem={({ item }) => (
            <ItemList
              title={item.name}
              desc={item.name}
              onFavorite={() => saveFavoriteChannel(item.code)}
              isFavorite={isFavoriteChannel(item.code) ? true : false}
            />
          )}
        />
      </View>
    </View>
  );
}
