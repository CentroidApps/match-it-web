
export class GlobalVariable {
    static BASE_URL: string = '';
};

export class ApiUrls {
    static VALIDATE = (url: string) => `${url}/validate`;
    static GAME_TYPE = () => `${GlobalVariable.BASE_URL}/gameType`;
    static GAME_TYPE_DROPDOWN = () => `${GlobalVariable.BASE_URL}/gameType/dropdown`;
    static GAME_LEVEL = () => `${GlobalVariable.BASE_URL}/gameLevel`;
    static GAME_LEVEL_DROPDOWN = () => `${GlobalVariable.BASE_URL}/gameLevel/dropdown`;
    static GAME_LEVEL_DETAILS = () => `${GlobalVariable.BASE_URL}/gameLevelDetails`;
    static GAME_SOURCE = () => `${GlobalVariable.BASE_URL}/gameSource`;

    static SYSTEM_CONSTANT_VALUES = () => `${GlobalVariable.BASE_URL}/system/constantsValues`;
    static MEDIA_DOWNLOAD = () => `${GlobalVariable.BASE_URL}/media/download/`;
    static MEDIA_UPLOAD = () => `${GlobalVariable.BASE_URL}/media/upload`;
    static MEDIA_DELETE = () => `${GlobalVariable.BASE_URL}/media`;
    static MEDIA_UPDATE_BUCKET = () => `${GlobalVariable.BASE_URL}/media/bucket`;
    static UPDATE_GAME_SOURCE_GROUP = () => `${GlobalVariable.BASE_URL}/gameSource/change-source-group`;
    static GAME_SOURCE_APPLY_NEW_SEQUENCE = () => `${GlobalVariable.BASE_URL}/gameSource/apply-new-sequence`;

    static DOWNLOAD_DATABASE = () => `${GlobalVariable.BASE_URL}/system/download-database`;
};

export const StorageConst = Object.freeze({
    SRV_URL: 'SRV_URL',
});