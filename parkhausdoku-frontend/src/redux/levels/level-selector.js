export function listAllLevels(state) {
    return state.levels.items;
}

export const listLevelBuilding = (buildingId)=>(state)=>{
    const levels = listAllLevels(state);
    return levels.filter(level=>(level.buildingId===buildingId)).sort((a,b)=> a.level - b.level);
}