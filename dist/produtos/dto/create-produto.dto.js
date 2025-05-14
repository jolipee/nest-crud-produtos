"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProdutoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateProdutoDto {
    desc;
    preco;
    emailEmpresa;
    dataValidade;
}
exports.CreateProdutoDto = CreateProdutoDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Necessário que seja String' }),
    __metadata("design:type", String)
], CreateProdutoDto.prototype, "desc", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(10),
    __metadata("design:type", Number)
], CreateProdutoDto.prototype, "preco", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'E-mail inválido' }),
    __metadata("design:type", String)
], CreateProdutoDto.prototype, "emailEmpresa", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Data inválida' }),
    __metadata("design:type", Date)
], CreateProdutoDto.prototype, "dataValidade", void 0);
//# sourceMappingURL=create-produto.dto.js.map