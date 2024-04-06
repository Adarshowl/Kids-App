import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { COLORS } from '../constants/Colors';
import GlobalStyle from '../styles/GlobalStyle';

export const HomeSkeleton = () => {
  return (
    <View
      style={{
        // backgroundColor: COLORS?.white,
        flex: 1
      }}
    >
      <View
        style={[
          GlobalStyle?.marginHorizontal15,
          GlobalStyle?.marginTop15
        ]}
      >

      </View>
      <View
        style={[
          GlobalStyle?.marginTop15,
          GlobalStyle?.marginVertical15,
          GlobalStyle?.marginHorizontal15,
          {
          }
        ]}
      >

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginHorizontal: 10,

          }}
        >
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: '45%',
              height: 120,
              borderRadius: 10
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: '45%',
              height: 120,
              borderRadius: 10
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginHorizontal: 10,
            marginTop: 20

          }}
        >
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: '45%',
              height: 120,
              borderRadius: 10
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: '45%',
              height: 120,
              borderRadius: 10
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
        </View>
      </View>
      <ShimmerPlaceHolder
        LinearGradient={LinearGradient}
        shimmerColors={['silver', '#ebebeb', '#ebebeb']}
        style={{
          width: '90%',
          height: 50,
          borderRadius: 10,
          marginHorizontal: 15
        }}
        shimmerStyle={{ backgroundColor: COLORS.light_gray }}
      />
      <View
        style={[
          GlobalStyle?.marginTop15,
          GlobalStyle?.marginHorizontal15
        ]}
      >
        <View
          style={[
            GlobalStyle?.flexRowAlignCenter, {
              flex: 1,
              marginTop: 20
            }
          ]}
        >
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 100, height: 20, marginTop: 5, borderRadius: 10,
              marginBottom: 10,

            }} />
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 100, height: 20, marginTop: 5, borderRadius: 10,
              marginBottom: 10,
              marginLeft: 25

            }} />
        </View>

        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          style={{
            width: '96%',
            height: 90,
            borderRadius: 10,
            marginHorizontal: 10
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20
          }}
        >
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: '40%',
              height: 60,
              borderRadius: 10,
              // marginHorizontal: 10
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: '46%',
              height: 60,
              borderRadius: 10,
              // marginHorizontal: 10
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
        </View>

        <View
          style={[
            GlobalStyle?.flexRowAlignCenter, {
              flex: 1,
              marginTop: 20
            }
          ]}
        >
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 100, height: 20, marginTop: 5, borderRadius: 10,
              marginBottom: 10,

            }} />
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 100, height: 20, marginTop: 5, borderRadius: 10,
              marginBottom: 10,
              marginLeft: 25

            }} />
        </View>
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          style={{
            width: '96%',
            height: 60,
            borderRadius: 10,
            marginHorizontal: 10
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          style={{
            width: '96%',
            height: 60,
            borderRadius: 10,
            marginHorizontal: 10,
            marginTop: 20
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />
        <View style={[
          GlobalStyle.marginHorizontal5,
          GlobalStyle?.marginVertical15,
          GlobalStyle.marginLeft15, {
            flexDirection: 'row',
            borderRadius: 10
          }
        ]}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 85,
              height: 85,
              borderRadius: 10
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />

          <View style={[
            GlobalStyle.marginHorizontal5,
            GlobalStyle.marginLeft15, {
              // flexDirection:'row'
            }
          ]}>
            <ShimmerPlaceHolder
              LinearGradient={LinearGradient}
              shimmerColors={['silver', '#ebebeb', '#ebebeb']}
              style={{
                width: 100, height: 20, marginTop: 5, borderRadius: 10
              }} />

            <ShimmerPlaceHolder
              LinearGradient={LinearGradient}
              shimmerColors={['silver', '#ebebeb', '#ebebeb']}
              style={{
                width: 80, height: 20, marginTop: 5,
                borderRadius: 10

              }} />

            <ShimmerPlaceHolder
              LinearGradient={LinearGradient}
              shimmerColors={['silver', '#ebebeb', '#ebebeb']}
              style={{
                width: 70, height: 20, marginTop: 5, borderRadius: 10
              }} />
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 10, top: 30 }}>
            <ShimmerPlaceHolder
              LinearGradient={LinearGradient}
              shimmerColors={['darkgray', '#ebebeb', '#ebebeb']}
              style={{
                width: 26, height: 26,
                borderRadius: 5
              }} />
          </View>
        </View>

      </View>

    </View>
  );
}

export const ShimmerView = () => {
  return (
    <View style={GlobalStyle.mainContainer}>
      <View
        style={[
          GlobalStyle?.flexRowJustifyBtwn, {
            flex: 1
          }
        ]}
      >
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          height={20}
          width={140}
          style={{
            // height: 5,
            borderRadius: 10
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          height={50}
          width={140}
          style={{
            borderRadius: 25
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />

      </View>

      <ShimmerPlaceHolder
        LinearGradient={LinearGradient}
        shimmerColors={['silver', '#ebebeb', '#ebebeb']}
        height={200}
        width={360}
        style={{
          borderRadius: 25,
          marginTop: 20
        }}
        shimmerStyle={{ backgroundColor: COLORS.light_gray }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderWidth: 0.5,
          borderRadius: 30,
          borderColor: COLORS?.gray,
          paddingVertical: 10,
          backgroundColor: COLORS?.background,
          paddingHorizontal: 10,
          marginTop: 20
        }}
      >
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          height={50}
          width={140}
          style={{
            borderRadius: 25
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          height={50}
          width={140}
          style={{
            borderRadius: 25
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />
      </View>

      <View
        style={[
          GlobalStyle?.mainContainer,
          GlobalStyle?.paddingVertical15,
          GlobalStyle?.marginVertical10,

          , {
            flex: 1,
            width: '100%',
            borderRadius: 15,
            marginHorizontal: 0,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: COLORS?.gray
          }]}
      >
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          height={50}
          width={50}
          style={{
            borderRadius: 5
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />

        <View
          style={[
            GlobalStyle?.marginHorizontal5,
            GlobalStyle?.marginLeft15,
            {
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }
          ]}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            height={20}
            width={120}
            style={{
              borderRadius: 5
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />

          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            height={30}
            width={140}
            style={{
              borderRadius: 5
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />

        </View>
      </View>
      <View style={[
        GlobalStyle.marginHorizontal5,
        GlobalStyle?.marginVertical15,
        GlobalStyle.marginLeft15, {
          flexDirection: 'row',
          borderRadius: 10
        }
      ]}>
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          style={{
            width: 85,
            height: 85,
            borderRadius: 10
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />

        <View style={[
          GlobalStyle.marginHorizontal5,
          GlobalStyle.marginLeft15, {
            // flexDirection:'row'
          }
        ]}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 100, height: 20, marginTop: 5, borderRadius: 10
            }} />

          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 80, height: 20, marginTop: 5,
              borderRadius: 10

            }} />

          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 70, height: 20, marginTop: 5, borderRadius: 10
            }} />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 10, top: 30 }}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['darkgray', '#ebebeb', '#ebebeb']}
            style={{
              width: 26, height: 26,
              borderRadius: 5
            }} />
        </View>
      </View>
    </View>
  );
}
export const AllowanceView = () => {
  return (
    <View style={GlobalStyle.mainContainer}>
      <View
        style={[
          GlobalStyle?.flexRowJustifyBtwn,
          GlobalStyle?.commaonBorder,
          {
            flex: 1,

          }
        ]}
      >
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['darkgray', '#ebebeb', '#ebebeb']}
          height={20}
          width={140}
          style={{
            // height: 5,
            borderRadius: 10
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          height={50}
          width={140}
          style={{
            borderRadius: 25
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />

      </View>
      <View
        style={[
          // GlobalStyle?.flexRowJustifyBtwn,
          GlobalStyle?.commaonBorder,
          {
            flex: 1,
          }
        ]}
      >

        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['darkgray', '#ebebeb', '#ebebeb']}
          height={60}
          width={100}
          style={{
            borderRadius: 25,
            // marginTop: 20
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15
          }}
        >
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            height={60}
            width={160}
            style={{
              borderRadius: 25,
              // marginTop: 10
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['darkgray', '#ebebeb', '#ebebeb']}
            height={60}
            width={160}
            style={{
              borderRadius: 25,
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderWidth: 0.5,
          borderRadius: 30,
          borderColor: COLORS?.gray,
          paddingVertical: 10,
          backgroundColor: COLORS?.background,
          paddingHorizontal: 10,
          marginTop: 20
        }}
      >
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          height={50}
          width={140}
          style={{
            borderRadius: 25
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          height={50}
          width={140}
          style={{
            borderRadius: 25
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />
      </View>

      

      <View
        style={[
          GlobalStyle?.mainContainer,
          GlobalStyle?.paddingVertical15,
          GlobalStyle?.marginVertical10,

          , {
            flex: 1,
            width: '100%',
            borderRadius: 15,
            marginHorizontal: 0,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: COLORS?.gray
          }]}
      >
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          height={50}
          width={50}
          style={{
            borderRadius: 5
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />

        <View
          style={[
            GlobalStyle?.marginHorizontal5,
            GlobalStyle?.marginLeft15,
            {
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }
          ]}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            height={20}
            width={120}
            style={{
              borderRadius: 5
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />

          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            height={30}
            width={140}
            style={{
              borderRadius: 5
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />

        </View>
      </View>

      <View
        style={[
          GlobalStyle?.mainContainer,
          GlobalStyle?.paddingVertical15,
          GlobalStyle?.marginVertical10,

          , {
            flex: 1,
            width: '100%',
            borderRadius: 15,
            marginHorizontal: 0,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: COLORS?.gray
          }]}
      >
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          height={50}
          width={50}
          style={{
            borderRadius: 5
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />

        <View
          style={[
            GlobalStyle?.marginHorizontal5,
            GlobalStyle?.marginLeft15,
            {
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }
          ]}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            height={20}
            width={120}
            style={{
              borderRadius: 5
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />

          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            height={30}
            width={140}
            style={{
              borderRadius: 5
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />

        </View>
      </View>
      <View style={[
        GlobalStyle.marginHorizontal5,
        GlobalStyle?.marginVertical15,
        GlobalStyle.marginLeft15, {
          flexDirection: 'row',
          borderRadius: 10
        }
      ]}>
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          style={{
            width: 85,
            height: 85,
            borderRadius: 10
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />

        <View style={[
          GlobalStyle.marginHorizontal5,
          GlobalStyle.marginLeft15, {
            // flexDirection:'row'
          }
        ]}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 100, height: 20, marginTop: 5, borderRadius: 10
            }} />

          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 80, height: 20, marginTop: 5,
              borderRadius: 10

            }} />

          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 70, height: 20, marginTop: 5, borderRadius: 10
            }} />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 10, top: 30 }}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['darkgray', '#ebebeb', '#ebebeb']}
            style={{
              width: 26, height: 26,
              borderRadius: 5
            }} />
        </View>
      </View>
    </View>
  );
}

export const RecipeSkel = () => {
  return (
    <View style={GlobalStyle.mainContainer}>
      <View
        style={[
          // GlobalStyle?.paddingHorizontal10,
          // GlobalStyle?.paddingVertical10,
          , {
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 10
          }
        ]}
      >
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          style={{
            width: '100%',
            height: 120,
            borderRadius: 10
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />
        <View
          style={{
            borderRadius: 10,
            marginTop: -30

          }}
        >
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['darkgray', '#ebebeb', '#ebebeb']}
            style={{
              width: '100%',
              height: 50,
              borderRadius: 10
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
        </View>
      </View>
    </View>
  );
}

export const GroceryListSkel = () => {
  return (
    <View style={GlobalStyle.mainContainer}>
      <View
        style={[
          // GlobalStyle?.paddingHorizontal10,
          // GlobalStyle?.paddingVertical10,
          , {
            borderRadius: 10,
            backgroundColor: COLORS?.white,
            paddingHorizontal: 10,
            paddingVertical: 10
          }
        ]}
      >
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          style={{
            width: '100%',
            height: 50,
            borderRadius: 10
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />
      </View>
    </View>
  );
}

export const DetailsPageSkeleton = () => {
  return (
    <View
      style={{
        // backgroundColor: COLORS?.white,
        flex: 1
      }}
    >
      <View
        style={[
          GlobalStyle?.marginHorizontal15,
          GlobalStyle?.marginTop15
        ]}
      >
        <View
          style={[
            // GlobalStyle?.paddingHorizontal10,
            // GlobalStyle?.paddingVertical10,
            , {
              borderRadius: 10,
              backgroundColor: COLORS?.white,
              paddingHorizontal: 10,
              paddingVertical: 10
            }
          ]}
        >
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: '100%',
              height: 180,
              borderRadius: 10
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
        </View>
        <View
          style={[
            GlobalStyle?.flexRowJustifyBtwn,
            GlobalStyle?.marginTop,
            {
              flex: 1,

            }
          ]}
        >
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 100, height: 20, marginTop: 5, borderRadius: 10
            }} />

          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            width={100}
            height={30}
            style={{
              borderRadius: 10
            }} />
        </View>

        <View
          style={[
            GlobalStyle?.flexRowJustifyBtwn,
            GlobalStyle?.marginTop,
            {
              flex: 1,
              marginBottom: 10
            }
          ]}
        >
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 100, height: 20, marginTop: 5, borderRadius: 10
            }} />
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 100, height: 20, marginTop: 5, borderRadius: 10
            }} />


        </View>


      </View>
      <View
        style={[
          GlobalStyle?.marginTop15,
          GlobalStyle?.marginVertical15,
          GlobalStyle?.marginHorizontal15,
          {
          }
        ]}
      >
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          style={{
            width: 100, height: 20, marginTop: 5, borderRadius: 10,
            marginBottom: 10

          }} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginHorizontal: 10,

          }}
        >
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 100,
              height: 80,
              borderRadius: 10
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 100,
              height: 80,
              borderRadius: 10
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 100,
              height: 80,
              borderRadius: 10
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
        </View>
      </View>

      <View
        style={[
          GlobalStyle?.marginTop15,
          GlobalStyle?.marginHorizontal15
        ]}
      >
        <View
          style={[
            GlobalStyle?.flexRowJustifyBtwn, {
              flex: 1,
              marginTop: 20
            }
          ]}
        >
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['silver', '#ebebeb', '#ebebeb']}
            style={{
              width: 100, height: 20, marginTop: 5, borderRadius: 10,
              marginBottom: 10

            }} />

        </View>
        <View style={[
          GlobalStyle.marginHorizontal5,
          GlobalStyle?.marginVertical15,
          GlobalStyle.marginLeft15, {
            flexDirection: 'row',
            borderRadius: 10,
            justifyContent: 'space-around'
          }
        ]}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['darkgray', '#ebebeb', '#ebebeb']}
            style={{
              width: 85,
              height: 35,
              borderRadius: 10
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['darkgray', '#ebebeb', '#ebebeb']}
            style={{
              width: 85,
              height: 35,
              borderRadius: 10
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['darkgray', '#ebebeb', '#ebebeb']}
            style={{
              width: 85,
              height: 35,
              borderRadius: 10
            }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
        </View>

        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          width={365}
          height={50}
          style={{

            borderRadius: 30
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          style={{
            width: 100, height: 20, marginTop: 5, borderRadius: 10,
            marginBottom: 10,
            marginTop: 20

          }} />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          width={365}
          height={40}
          style={{
            marginBottom: 10,
            borderRadius: 10
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          width={365}
          height={40}
          style={{

            borderRadius: 10,
            marginBottom: 10
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          shimmerColors={['silver', '#ebebeb', '#ebebeb']}
          width={365}
          height={40}
          style={{

            borderRadius: 10
          }}
          shimmerStyle={{ backgroundColor: COLORS.light_gray }}
        />

      </View>

    </View>
  );
}
const styles = StyleSheet.create({});
