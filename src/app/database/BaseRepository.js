import {realm} from "./Realm";

export default class BaseRepository<T> {

    constructor(typeName: string) {
        this.typeName = typeName;
    }

    create = (object: T) => {
        realm.write(() => {
            realm.create(this.typeName, object);
        });
    };

    createOrUpdate = (object: T) => {
        realm.write(() => {
            realm.create(this.typeName, object, true);
        });
    };

    update = (object: T) => {
        realm.write(() => {
            realm.create(this.typeName, object, true);
        });
    };

    remove = (object: T) => {
        realm.write(() => {
            return realm.delete(object);
        });
    };

    getAll = (): Array<T> => {
        return realm.objects(this.typeName);
    };

    find = (field, value): Array<T> => {
        const query = `${field} = "${value}"`;
        const result = realm.objects(this.typeName).filtered(query);
        return result.length >= 1 ? result[0] : undefined;
    }

}