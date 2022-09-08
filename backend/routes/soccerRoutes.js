import {addNewPlayer, getPlayers, getPlayerWithID, updatePlayer, deletePlayer} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    // GET endpoint
        .get(getPlayers)
    // POST endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
    // GET specific player    
        .get(getPlayerWithID)
    // PUT update a specific player
        .put(updatePlayer)
    // DELETE specific player
        .delete(deletePlayer);
}

export default routes;