import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Picker,
  TouchableOpacity,
} from "react-native";

export default function Home() {
  const [items, setItems] = useState({
    item1: {
      name: "Eren Shirt",
      price: 300,
    },
    item2: {
      name: "Hoody Jacket",
      price: 700,
    },
    item3: {
      name: "Aot Shirt",
      price: 500,
    },
    item4: {
      name: "Aot SweatShirt",
      price: 750,
    },
    item5: {
      name: "Aot Female Shirt",
      price: 350,
    },
    item6: {
      name: "Aot SweatShirt",
      price: 700,
    },
    item7: {
      name: "Newspaper Hoody",
      price: 750,
    },
  });
  const [item, setItem] = useState({});
  const handleChange = (prop) => (event) => {
    setItem({ ...item, [prop]: event.target.value });
  };
  const buy = (event) => {
    alert(item);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://i.dlpng.com/static/png/5277529-attack-on-titan-logo-mug-playstation-gear-attack-on-titan-logo-png-627_203_preview.png",
        }}
      />
      <Text style={styles.text}> MERCHANDISE </Text>

      <Image
        style={styles.merch}
        source={{
          uri: "https://i.pinimg.com/originals/06/b7/cf/06b7cf5c5149fcd61ff43b0873c70dee.jpg",
        }}
      />
      <Text style={styles.productname}> Eren Shirt </Text>
      <Text style={styles.productprice}> 300 Pesos </Text>

      <Image
        style={styles.merch}
        source={{
          uri: "https://i.ebayimg.com/00/s/OTYwWDk2MA==/z/BXAAAOSw8b1aIhDL/$_3.JPG",
        }}
      />
      <Text style={styles.productname}> Hoody Jacket </Text>
      <Text style={styles.productprice}> 500 Pesos </Text>

      <Image
        style={styles.merch}
        source={{
          uri: "https://m.media-amazon.com/images/I/B1OGJ8t+8ZS._CLa%7C2140%2C2000%7C81768pXW2FL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX342_.png",
        }}
      />
      <Text style={styles.productname}> Attack on Titans Shirt </Text>
      <Text style={styles.productprice}> 300 Pesos </Text>

      <Image
        style={styles.merch}
        source={{
          uri: "https://tibs3.threeifbyspace.net/wp-content/uploads/2021/02/AOTBadge.jpg",
        }}
      />
      <Text style={styles.productname}> Attack on Titans Sweatshirt </Text>
      <Text style={styles.productprice}> 750 Pesos </Text>

      <Image
        style={styles.merch}
        source={{
          uri: "https://ih1.redbubble.net/image.1454532587.0312/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg",
        }}
      />
      <Text style={styles.productname}> Attack on Titans Female Shirt </Text>
      <Text style={styles.productprice}> 350 Pesos </Text>

      <Image
        style={styles.merch}
        source={{
          uri: "https://www.ripplejunction.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/a/taal2179_front.jpg",
        }}
      />
      <Text style={styles.productname}> Attack on Titans Sweatshirt </Text>
      <Text style={styles.productprice}> 700 Pesos </Text>

      <Image
        style={styles.merch}
        source={{
          uri: "https://ih1.redbubble.net/image.1665110812.2510/ssrco,lightweight_hoodie,mens,101010:01c5ca27c6,front,square_product,x600-bg,f8f8f8.2.jpg",
        }}
      />
      <Text style={styles.productname}> Newspaper Hoody </Text>
      <Text style={styles.productprice}> 750 Pesos </Text>

      <Picker
        style={styles.combobox}
        selectedValue={item}
        onValueChange={(itemValue, itemIndex) => setItem(itemValue)}
      >
        <Picker.Item
          label="Eren Shirt - 300 Pesos"
          value={items.item1.name + "-" + items.item1.price}
        />
        <Picker.Item
          label="Hoody Jacket - 700 Pesos"
          value={items.item2.name + "-" + items.item2.price}
        />
        <Picker.Item
          label="Aot Shirt - 500 Pesos"
          value={items.item3.name + "-" + items.item3.price}
        />
        <Picker.Item
          label="Aot SweatShirt - 750 Pesos"
          value={items.item4.name + "-" + items.item4.price}
        />
        <Picker.Item
          label="Aot Female Shirt - 350 Pesos"
          value={items.item5.name + "-" + items.item5.price}
        />
        <Picker.Item
          label="Aot SweatShirt - 700 Pesos"
          value={items.item6.name + "-" + items.item6.price}
        />
        <Picker.Item
          label="Newspaper Hoody - 750 Pesos"
          value={items.item7.name + "-" + items.item7.price}
        />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={buy}>
        <Text style={styles.buttonText}> Buy Now! </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    paddingBottom: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  img: {
    height: 100,
    width: 300,
  },
  merch: {
    height: 200,
    width: 200,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  productprice: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  combobox: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#add8e6",
    fontWeight: "bold",
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    fontWeight: "bold",
  },
});
