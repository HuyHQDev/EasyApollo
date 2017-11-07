import BaseRepository from "./BaseRepository";
import {realm} from "./Realm";
import Group, {GROUP_SCHEMA} from "../model/Group";

export default class GroupRepository extends BaseRepository<Group> {

    constructor() {
        super(GROUP_SCHEMA)
    }

    getMaxUpdatedAt(): string {
        const items = realm.objects(GROUP_SCHEMA);
        let maxUpdatedAt = '';
        items.forEach((item) => {
            if (item.DateTime2 > maxUpdatedAt) {
                maxUpdatedAt = item.DateTime2;
            }
        });
        return maxUpdatedAt;
    }

}
