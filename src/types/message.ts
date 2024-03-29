import type { Command } from "./command"
import { AllyInfo, EnemyInfo, GameState, Robot, TeamColor } from "./world"
import { Ball, Geometry } from "./geometry"
import { Annotation } from "./annotation"

export type WorldMessage = {
  state: GameState
  geometry: Geometry
  alliesBot: [number, Robot<AllyInfo>][]
  enemiesBot: [number, Robot<EnemyInfo>][]
  ball: Ball | null
  teamColor: TeamColor
}

export type ToolMessage = {
  world: WorldMessage
  data: ToolDataMessage
}

export type ToolDataMessage = {
  annotations: [[string, Annotation]]
}

export enum ToolRequestType {
  Commands = "commands",
}

export type CommandRequest = {
  requestType: ToolRequestType.Commands
  payload: [number, Command][]
}

export type ToolRequest = CommandRequest
