export const GROUP_SCHEMA = 'Group';

export default class Group {
    id: string;
    title: string;
    description: string;
    color: string;
}

Group.schema = {
    name: GROUP_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: {type: 'string'},
        title: {type: 'string'},
        description: {type: 'string', optional: true},
        color: {type: 'string', optional: true},
    }
};