export interface SqlColumn {
  name: string;
  type: string;
  isPrimaryKey?: boolean;
  isForeignKey?: boolean;
}

export interface SqlTable {
  id: string;
  name: string;
  columns: SqlColumn[];
  x: number;
  y: number;
  width?: number;
}

export interface SqlConnection {
  id: string;
  fromTable: string;
  fromColumn: string;
  fromSide?: "left" | "right";
  toTable: string;
  toColumn: string;
  toSide?: "left" | "right";
  label?: string;
}

export interface SqlSchema {
  id: string;
  name: string;
  canvasWidth: number;
  canvasHeight: number;
  tables: SqlTable[];
  connections: SqlConnection[];
}

export interface SqlPracticeQuestion {
  id: string;
  number: number;
  title: string;
  prompt: string;
  expectedColumns?: string[];
  schema: SqlSchema;
  answer: string;
  explanation: string;
}
