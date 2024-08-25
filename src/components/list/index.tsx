//receber uma array
//passar as informações para o item-list
//funcionar com canais e programas

import { Pressable, View } from "react-native";
import { ItemList } from "../item-list";

export type ListViewType = {
  title: string;
  desc: string;
  action: () => void;
};

export function ListView({ title, desc, action }: ListViewType) {
  return (
    <View>
      <Pressable onPress={action}>
        <ItemList title={title} desc={desc} favorite={false} />
      </Pressable>
    </View>
  );
}
