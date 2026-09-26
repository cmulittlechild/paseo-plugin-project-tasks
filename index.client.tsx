import type { PluginClientContext } from "@getpaseo/plugin/client";
import { TasksPanel } from "./board.client";

export default function contribute(client: PluginClientContext) {
  client.addWorkspacePanel({
    id: "board",
    title: "Tasks",
    icon: "ListTodo",
    context: "workspace",
    Component: TasksPanel,
  });
  client.addCommandCenterItem({
    id: "open-board",
    title: "Open tasks",
    icon: "ListTodo",
    keywords: ["todo", "task", "board"],
    context: "workspace",
    onSelect({ openPanel }) {
      openPanel("board");
    },
  });
  return () => {};
}
