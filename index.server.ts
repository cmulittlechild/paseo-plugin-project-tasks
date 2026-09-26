import type { PluginServerContext } from "@getpaseo/plugin/server";
import {
  addImage,
  createTask,
  getBoard,
  readImage,
  recordRun,
  removeImage,
  removeTask,
  reorderOpen,
  setStatus,
  updateTask,
} from "./server/board.server";
import {
  addImageRpc,
  createTaskRpc,
  getBoardRpc,
  readImageRpc,
  recordRunRpc,
  removeImageRpc,
  removeTaskRpc,
  reorderOpenRpc,
  setStatusRpc,
  updateTaskRpc,
} from "./shared/board.shared";

export default function contribute(server: PluginServerContext) {
  server.handle(getBoardRpc, getBoard);
  server.handle(createTaskRpc, createTask);
  server.handle(updateTaskRpc, updateTask);
  server.handle(recordRunRpc, recordRun);
  server.handle(setStatusRpc, setStatus);
  server.handle(reorderOpenRpc, reorderOpen);
  server.handle(removeTaskRpc, removeTask);
  server.handle(addImageRpc, addImage);
  server.handle(removeImageRpc, removeImage);
  server.handle(readImageRpc, readImage);
  return () => {};
}
