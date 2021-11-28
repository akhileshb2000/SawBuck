import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get('window').height - 75
    },
    video: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    uiContainer: {
        height: "100%",
        justifyContent: "flex-end",
    },
    rightSide: {
        alignSelf: "flex-end"
    },
    bottomSide: {

    },
    rapperName: {
        color: "#FFF",
        fontSize: 36,
        fontWeight: "bold",
    },
    hometown: {

    },
    priceRow: {

    },
    currentPrice: {
        
    },
    priceChange: {

    }
});

export default styles;