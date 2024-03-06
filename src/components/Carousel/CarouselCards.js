import React from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import { CarouselData } from '../../constants/index'

const CarouselCards = () => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    return (
        <View style={{ height: 270, padding: 0, backgroundColor: "white", }}>
            <Carousel
                layout='tinder'
                layoutCardOffset={9}
                ref={isCarousel}
                data={CarouselData}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            />
            <Pagination
                dotsLength={CarouselData.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'black'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>
    )
}

export default CarouselCards