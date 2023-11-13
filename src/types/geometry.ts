export type Rectangle = {
  width: number
  height: number
  topLeft: [number, number]
}

export type Point = [number, number]

export type Line = {
  start: [number, number]
  end: [number, number]
}

export type Ball = {
  position: [number, number, number]
}

export type Circle = {
  center: [number, number]
  radius: number
}

type GoalOrPenalty = {
  depth: number
  width: number
  area: Rectangle
}

export type Goal = GoalOrPenalty
export type Penalty = GoalOrPenalty
export type Field = {
  width: number
  length: number
}

export type Geometry = {
  boundaryWidth: number
  field: Field
  center: Circle
  allyGoal: Goal
  enemyGoal: Goal
  allyPenalty: Penalty
  enemyPenalty: Penalty
}