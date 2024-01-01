import * as services from "../services";

export const register = async (req, res) => {
    try {
        const reg = await services.register();
        return res.status(200).json(reg);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            mes: 'Internal Server Error :<'
        });
    }
}