export * from '../routes/Routes.action'
export * from '../Login/Login.actions'
export * from '../Main/Main.actions'
export * from '../Upsert/Upsert.actions'


export function checkBindAction (...actionsList) {
    let bindActions = {}
    for (let actions in actionsList) {
        for (let fn in actionsList[actions]) {
            if (bindActions[fn] !== undefined) {
                alert(`Develop bug same action name ${fn}`)
                console.error(`Same action name ${fn}`)
            }
            bindActions[fn] = actionsList[actions][fn]
        }
    }
    return bindActions
}