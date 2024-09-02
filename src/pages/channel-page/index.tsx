import { FlatList, View } from "react-native";
import { ItemList } from "../../components/item-list";
import { PageTitle } from "../../components/page-tittle";
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
    toggleFavorites,
    showFavorites,
  } = useChannel();

  return (
    <View>
      <PageTitle
        arrow={false}
        heart={true}
        title={showFavorites ? "Canais Favoritos" : "Canais"}
        onFavoritesClick={() => toggleFavorites()}
        isFavorites={showFavorites}
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
