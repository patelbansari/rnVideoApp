import ImagePicker from "react-native-image-picker";

export function showImagePickerDialog() {
    return new Promise((resolve, _) => {
        const options = {
            title: 'Choose Photo',
            storageOptions: {
                skipBackup: true,
                path: "images"
            },
            mediaType: 'photo',
        };
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel || response.error) {
                console.log(response.error)
                resolve(false);
            } 
            else {
                resolve(response);
            }
        })
    })
}

