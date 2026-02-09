import express from 'express';
import verifyJWT from '../middlewares/auth.middlewares.js';
import verifyChannelOwner from '../middlewares/channel.middleware.js';

import {
  createChannel,
  changeChannelName,
  changeDescription,
} from '../controllers/channel.controllers.js';

const channelRouter = express.Router();    

channelRouter.post('/', verifyJWT, createChannel);
channelRouter.patch('/name', verifyJWT, verifyChannelOwner, changeChannelName);
channelRouter.patch('/description', verifyJWT, verifyChannelOwner, changeDescription);


export default channelRouter;
