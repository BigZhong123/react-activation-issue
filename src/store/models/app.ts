const app = {
    state: {
        id: ''
    },
    reducers: {
        setId(state, payload: string) {
            return {
                ...state,
                id: payload
            }
        }
    }
}

export default app;
