interface ITAData {
    grade: string;
    major: string;
}

export class TAData implements ITAData {
    constructor(public grade: string, public major: string) { }
}

interface IDataAdapter {
    convert(data: ITAData): string;
}

export class JSONDataAdapter implements IDataAdapter {
    convert(data: ITAData): string {
        return JSON.stringify(data);
    }
}

export class XMLDataAdapter implements IDataAdapter {
    convert(data: ITAData): string {
        const xml = `<TAData><Grade>${data.grade}</Grade><Major>${data.major}</Major></TAData>`;
        return xml;
    }
}

export class DataConverter {
    constructor(private adapter: IDataAdapter) { }

    convert(data: ITAData): string {
        return this.adapter.convert(data);
    }
}
