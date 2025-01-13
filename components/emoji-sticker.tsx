import { type ImageSource } from "expo-image";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImageSize = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImageSize.value !== imageSize * 2) {
        scaleImageSize.value *= 2;
      } else {
        scaleImageSize.value = Math.round(scaleImageSize.value / 2);
      }
    });
  const imageStyle = useAnimatedStyle(() => ({
    width: withSpring(scaleImageSize.value),
    height: withSpring(scaleImageSize.value),
  }));
  const drag = Gesture.Pan().onChange((e) => {
    translateX.value += e.changeX;
    translateY.value += e.changeY;
  });
  const containerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: withSpring(translateX.value) },
      { translateY: withSpring(translateY.value) },
    ],
  }));
  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
