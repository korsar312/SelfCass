import { GetArray } from "./GetArray/GetArray";
import { ToArray } from "./ToArray/ToArray";

class Index {
	/** Возвращает массив */
	public getArray = GetArray.execute();

	/** Преобразует в массив */
	public toArray = ToArray.execute();
}

export default new Index();
