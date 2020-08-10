export function listAllAdmissions(state) {
    return state.admissions.items;
}

export const listAdmissionsLevel= (buildingId,levelId)=>(state)=>{
    const admissions = listAllAdmissions(state);
    return admissions.filter(admission=>(admission.buildingId===buildingId && admission.levelId===levelId))
}