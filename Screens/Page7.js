import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function Page7({ navigation }) {
  return (
    <View style={Styles.container}>
      <Card
        style={{
          backgroundColor: "#263A96",
          height: 232,
          width: "100%",
          borderBottomLeftRadius: 92,
          borderRadius: 0,
        }}
      >
        <Ionicons
          style={{
            marginTop: 40,
            marginLeft: 15,
            position: "absolute",
            height: 25,
            width: 25,
          }}
          name="chevron-back-outline"
          size={30}
          color={"#fff"}
        />
        <View style={{ margin: 38, marginLeft: 47 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/logocard.png")} />
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "500" }}>
              Login
            </Text>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "#fff",
              marginTop: 25,
            }}
          >
            100% Complete{" "}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#fff",
              marginTop: 20,
            }}
          >
            SkillSet Info
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 8,
                width: 80,
                backgroundColor: "#FF9800",
                borderRadius: 6,
                marginTop: 20,
              }}
            ></View>
            <View
              style={{
                height: 8,
                width: 80,
                backgroundColor: "#FF9800",
                borderRadius: 6,
                marginTop: 20,
              }}
            ></View>
            <View
              style={{
                height: 8,
                width: 80,
                backgroundColor: "#FF9800",
                borderRadius: 6,
                marginTop: 20,
              }}
            ></View>
          </View>
        </View>
      </Card>

      <ScrollView>
        <View style={{ margin: "10%" }}>
          <View>
            <Text style={{ color: "#292D3D", fontWeight: "700", fontSize: 20 }}>
              Sign Up
            </Text>
            <Text style={{ fontWeight: "500", color: "#919191", fontSize: 16 }}>
              Create an account
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: "400",
                color: "#263A96",
              }}
            >
              Skillset
            </Text>
            <TouchableOpacity
              style={{
                height: 27,
                width: 99,
                backgroundColor: "#FFF",
                borderRadius: 18,
                justifyContent: "center",
                borderColor: "#263A96",
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#263A96",
                }}
              >
                Add Skill
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Card
              style={{
                height: 170,
                width: 306,
                backgroundColor: "#F3F3F3",
                borderRadius: 10,
                alignItems: "center",
                marginTop: "5%",
                
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  color: "#353948",
                  marginTop: 20,
                  margin: 5,
                }}
              >
                Skill
              </Text>

              <View style={Styles.wrapperInput}>
                <TextInput style={Styles.input} placeholder="xxxxxxx" />

                <Ionicons
                  name="chevron-down-outline"
                  size={20}
                  color={"#919191"}
                  style={{ marginRight: 10 }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 10,
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "400", color: "#353948" }}
                >
                  Experience
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    color: "#353948",
                    marginRight: 75,
                  }}
                >
                  Level
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    height: 38,
                    width: 138,
                    backgroundColor: "#fff",
                    borderColor: "#DADADA",
                    borderRadius: 18,
                    justifyContent: "space-around",
                    alignItems: "center",
                    borderWidth: 1,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      alignItems: "flex-start",
                      fontSize: 14,
                      fontWeight: "400",
                      color: "#919191",
                    }}
                  >
                    Years
                  </Text>
                  <Text
                    style={{
                      alignItems: "flex-end",
                      fontSize: 14,
                      fontWeight: "400",
                      color: "#919191",
                    }}
                  >
                    Months
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      padding: 0,
                      backgroundColor: "#263A96",
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      margin: 2,
                    }}
                  ></TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      padding: 0,
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      margin: 2,
                      borderWidth: 1,
                      borderColor: "#DADADA",
                    }}
                  ></TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      padding: 0,
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      margin: 2,
                      borderWidth: 1,
                      borderColor: "#DADADA",
                    }}
                  ></TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      padding: 0,
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      margin: 2,
                      borderWidth: 1,
                      borderColor: "#DADADA",
                    }}
                  ></TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      padding: 0,
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      margin: 2,
                      borderWidth: 1,
                      borderColor: "#DADADA",
                    }}
                  ></TouchableOpacity>
                </View>
              </View>
            </Card>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: "400",
                color: "#263A96",
              }}
            >
              Achievements
            </Text>
            <TouchableOpacity
              style={{
                height: 27,
                width: 99,
                backgroundColor: "#FFF",
                borderRadius: 18,
                justifyContent: "center",
                borderColor: "#263A96",
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#263A96",
                }}
              >
                Add{" "}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
            }}
          >
            <Card
              style={{
                height: 170,
                width: 306,
                backgroundColor: "#F3F3F3",
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  color: "#353948",
                  marginTop: 20,
                  margin: 5,
                }}
              >
                Achievements
              </Text>
              <TextInput
                style={{
                  height: 84,
                  width: 281,
                  borderWidth: 1,
                  borderRadius: 18,
                  borderColor: "#DADADA",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10,
                }}
                placeholder={"xxxxxxxxx"}
              ></TextInput>
            </Card>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: "400",
                color: "#263A96",
              }}
            >
              Certificates
            </Text>
            <TouchableOpacity
              style={{
                height: 27,
                width: 99,
                backgroundColor: "#FFF",
                borderRadius: 18,
                justifyContent: "center",
                borderColor: "#263A96",
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#263A96",
                }}
              >
                Add
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
            }}
          >
            <Card
              style={{
                height: 136,
                width: 306,
                backgroundColor: "#F3F3F3",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                borderStyle: "dashed",
                borderWidth: 1,
              }}
            >
              {/* <Text style={{ margin: 5 }}>Achievements</Text> */}
              {/* <TextInput style={{ height: 84, width: 281, borderWidth: 1, borderRadius: 18, borderColor: '#DADADA', alignItems: 'center', justifyContent: 'center', padding: 10 }}> */}
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Ionicons
                  name="add-circle-outline"
                  size={40}
                  color="#8E95B7"
                  style={{ justifyContent: "center", alignItems: "center" }}
                ></Ionicons>
              </View>
              <Text
                style={{ fontSize: 12, fontWeight: "400", color: "#919191" }}
              >
                Upload Certificates in {"\n"} PDF / JPG Format.
              </Text>
              {/* </TextInput> */}
            </Card>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "5%",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Page6")}
              style={{
                height: 51,
                width: 71,
                backgroundColor: "#263A96",
                borderRadius: 18,
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Ionicons
                name="chevron-back-outline"
                size={30}
                color={"#ffffff"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Page8")}
              style={{
                height: 51,
                width: 71,
                backgroundColor: "#263A96",
                borderRadius: 18,
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Ionicons name="checkmark-outline" size={30} color={"#ffffff"} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  // text:{
  //     fontSize:16,
  //     fontWeight:'400',
  //     color:'#353948',
  // },
  wrapperInput: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#DADADA",
    backgroundColor: "#fff",
    marginTop: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0,
  },

  input: {
    padding: 5,

    width: "80%",
  },
});
