import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./tuits-service"

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    /**  @param tuit {Object} */
    async (tuit) => {
        return await service.createTuit(tuit)
})

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    /**  @param tuitId {int} */
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    })

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        /**  @param tuit {Object} */
        async (tuit) =>
            await service.updateTuit(tuit)
    )
