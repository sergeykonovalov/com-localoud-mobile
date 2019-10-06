const RECORDINGS_PATH = './assets/data/recordings/';
const IMAGES_PATH = './assets/data/images/';

export default {
  meta: {
    title: 'Localoud RN'
  },
  tracks: [
    {
      key: '001',
      title: 'Первая запись',
      get recordingFile() {
        return RECORDINGS_PATH + this.key + '.mp3';
      },
      get imageFile() {
        return IMAGES_PATH + this.key + '.jpg';
      },
      imageText: '001'
    },
    {
      key: '002',
      title: 'Вторая запись',
      get recordingFile() {
        return RECORDINGS_PATH + this.key + '.mp3';
      },
      get imageFile() {
        return IMAGES_PATH + this.key + '.jpg';
      },
      imageText: '002'
    },
    {
      key: '003',
      title: 'Третья запись',
      get recordingFile() {
        return RECORDINGS_PATH + this.key + '.mp3';
      },
      get imageFile() {
        return IMAGES_PATH + this.key + '.jpg';
      },
      imageText: '003'
    },
  ]
};
