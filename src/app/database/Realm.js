import Realm from 'realm'
import Group from '../model/Group'

export const realm = new Realm({
    schema: [
        Group.schema,
    ],
    schemaVersion: 0
});

export const deleteAllData = () => {
    realm.write(() => {
        realm.deleteAll();
    });
};