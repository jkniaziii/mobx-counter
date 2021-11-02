import { types } from "mobx-state-tree";

const items = types.model('items', {
    name: types.string,
    id: types.number,
})


export default items;