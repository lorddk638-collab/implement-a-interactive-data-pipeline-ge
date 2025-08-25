interface DataPoint {
  id: string;
  value: number;
  timestamp: Date;
}

interface Transform {
  type: string; // e.g. "filter", "aggregate", "join"
  config: object; // configuration specific to the transform type
}

interface Source {
  type: string; // e.g. "csv", "api", "database"
  config: object; // configuration specific to the source type
}

interface Sink {
  type: string; // e.g. "console", "file", "database"
  config: object; // configuration specific to the sink type
}

interface Pipeline {
  id: string;
  name: string;
  sources: Source[];
  transforms: Transform[];
  sinks: Sink[];
}

interface InteractiveDataPipelineGenerator {
  pipelines: Pipeline[];
  createPipeline(name: string): Pipeline;
  addSourceToPipeline(pipelineId: string, source: Source): void;
  addTransformToPipeline(pipelineId: string, transform: Transform): void;
  addSinkToPipeline(pipelineId: string, sink: Sink): void;
  deletePipeline(pipelineId: string): void;
  runPipeline(pipelineId: string): void;
}