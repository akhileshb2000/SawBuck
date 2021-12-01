import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",//Dimensions.get('window').height - 75
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
        padding: 10,
    },
    rapperName: {
        color: "#FFF",
        fontSize: 36,
        fontWeight: "600",
        marginBottom: 5,
    },
    hometown: {
        color: "#FFF",
        fontSize: 18,
        marginBottom: 5,
    },
    priceRow: {
        flexDirection: "row",
    },
    currentPrice: {
        
    },
    priceChange: {

    }
});

export default styles;