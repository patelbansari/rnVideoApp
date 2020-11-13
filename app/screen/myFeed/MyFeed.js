import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
  Share,
} from 'react-native';
import colors from '../../config/colors';
import Video from 'react-native-video';
import {useDispatch, useSelector} from 'react-redux';
import * as CommonActions from '../../redux/action/CommonAction';
import {TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { showImagePickerDialog } from '../../helper/ImagePickerUtil';
import Pause from '../../assets/image/ic_m_pause.svg'
import Play from '../../assets/image/ic_m_play.svg'

export default MyFeed = () => {
  const feeddata = useSelector((state) => state.CommonReducers.feed);
  const refreshing = useSelector((state) => state.CommonReducers.refreshing);
  const navigation = useNavigation()
  const [listRefresh, setListRefresh] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CommonActions.getFeed(false));
    navigation.setParams({profileImage:setProfileImage})
  }, []);

  const setProfileImage = () => {
    showImagePickerDialog().then(res => {
      console.log(res)
      navigation.setParams({uri:res.uri})
    }).catch(error => {
      console.log(error)
    })
  }

  const onRefresh = () => {
    dispatch(CommonActions.getFeed(true));
    setListRefresh(!listRefresh);
  };

  const onEndReached = () => {
    dispatch(CommonActions.loadMoreFeed(true));
  };

  const onShare = async (item) => {
    try {
      const result = await Share.share({
        title: 'Video link',
        message: item.video_url,
        url: item.video_url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
        alert(result.action);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const renderRow = (item, index) => {
    return (
      <TouchableOpacity
        onLongPress={() => {
          onShare(item);
        }}>
        
        <View style={style.rowView} key={item.id}>
          {item.isPaused ? (
            <Image style={style.videoView} source={{uri: item.thumbnail_url}} />
          ) : (
            <Video
              playInBackground={false}
              playWhenInactive={false}
              ref={(ref) => {
                player = ref;
              }}
              paused={item.isPaused}
              source={{uri: item.video_url}}
              bufferConfig={{
                maxBufferMs: 2000,
              }}
              resizeMode="cover"
              style={style.videoView}
              onEnd={() => {
                feeddata.map((it) => {
                  it.isPaused = true;
                });
                dispatch(CommonActions.updateFeed(feeddata));
                setListRefresh(!listRefresh);
              }}
            />
          )}
          <TouchableOpacity
            onPress={() => {
              feeddata.map((it) => {
                if (it.id === item.id) {
                  console.log('id',it.id)
                  it.isPaused = !item.isPaused;
                } else {
                  it.isPaused = true;
                }
              });
              setListRefresh(!listRefresh);
              dispatch(CommonActions.updateFeed(feeddata));
            }}>
            <View style={style.playpauseButtonView}>
             {  item.isPaused ? <Play /> : <Pause/> }
            </View>
          </TouchableOpacity>
         
          <View style={style.detailView}>
            <View style={style.topView}>
              <Text style={style.newText}>New</Text>
              <Text style={style.timeText}>2 hr ago</Text>
            </View>
            <Text style={style.titleText}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      style={style.flatList}
      data={feeddata}
      keyExtractor={(item, index) => String(index)}
      onEndReached={() => onEndReached()}
      refreshControl={
        <RefreshControl
          colors={[colors.blue]}
          refreshing={refreshing}
          onRefresh={() => onRefresh()}
        />
      }
      renderItem={({item, index}) => renderRow(item, index)}
      extraData={listRefresh}
    />
  );
};

const style = StyleSheet.create({
  flatList: {flex: 1, paddingHorizontal: 10},
  rowView: {height: 200, marginTop: 10},
  videoView: {
    height: 130,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  detailView: {
    height: 80,
    zIndex: 999,
    borderRadius: 10,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    justifyContent: 'center',
  },
  topView: {flexDirection: 'row', justifyContent: 'space-between'},
  newText: {fontSize: 13, color: colors.blue},
  timeText: {fontSize: 13, color: colors.gray},
  titleText: {fontSize: 20, fontWeight: 'bold'},
  playpauseButtonView: {
    height: 130,
    width: 40,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  playPauseButton: {width: 40, height: 40},
});
