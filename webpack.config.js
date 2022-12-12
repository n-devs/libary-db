"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var webpack_node_externals_1 = __importDefault(require("webpack-node-externals"));
var webpack_shell_plugin_next_1 = __importDefault(require("webpack-shell-plugin-next"));
var getConfig = function (env, argv) {
    require("dotenv").config({
        path: path_1.default.resolve(__dirname, ".env.".concat(env.mode)),
    });
    return {
        entry: "./src/index.ts",
        target: "node",
        mode: argv.mode === "production" ? "production" : "development",
        externals: [(0, webpack_node_externals_1.default)()],
        plugins: [
            new webpack_shell_plugin_next_1.default({
                onBuildStart: {
                    scripts: ["npm run clean:dev && npm run clean:prod"],
                    blocking: true,
                    parallel: false,
                },
                onBuildEnd: {
                    scripts: ["npm run dev"],
                    blocking: false,
                    parallel: true,
                },
            })
        ],
        module: {
            rules: [{
                    test: /\.(ts|js)$/,
                    loader: "ts-loader",
                    options: {},
                    exclude: /node_modules/,
                }]
        },
        resolve: {
            extensions: [".ts", ".js"],
            alias: {
                src: path_1.default.resolve(__dirname, "src"),
            }
        },
        output: {
            path: path_1.default.join(__dirname, "build"),
            filename: "index.js",
        },
        optimization: {
            moduleIds: "deterministic",
            splitChunks: {
                chunks: "all",
            }
        }
    };
};
exports.default = getConfig;
//# sourceMappingURL=webpack.config.js.map