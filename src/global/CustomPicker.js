import { View, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const CustomPicker = ({ selectedValue, onValueChange, items }) => {
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
                mode="dropdown"
                style={styles.picker}
            >
                {items.map((item, index) => (
                    <Picker.Item
                        key={index}
                        label={item.label}
                        value={item.value}
                    />
                ))}
            </Picker>
            <TouchableOpacity style={styles.dropdownIconContainer}>
                <MaterialIcons
                    name="arrow-drop-down"
                    size={24}
                    color="black"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        overflow: 'hidden',
    },
    picker: {
        width: '100%',
        height: 40,
        backgroundColor: 'transparent',
    },
    dropdownIconContainer: {
        position: 'absolute',
        top: 12,
        right: 10,
    },
});

export default CustomPicker;
