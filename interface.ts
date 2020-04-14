/**
 * 指定id评分指标的详情查询
 */
export interface InquireDesignatedMarkTargetDeclaration {
    commentIndexLevelResList: CommentIndexLevelResListDeclaration[]; //等级模型设置详情
    creator: number; //评分指标创建人
    description: string; //评分指标描述
    id: string; //评分指标id
    modifyTime: string; //最新更新时间
    name: string; //评分指标名字
    tenantId: string; //项目名：所属项目:如经济日报：104,新华社：105
    type: MarkTargetTypeDeclaration; //评分指标类型 1:评分指标 2:组合指标
}

/**
 * 等级模型设置详情
 */
interface CommentIndexLevelResListDeclaration {
    commentIndexDetailId: string; //评分指标设置详情id
    commentIndexId: number; //评分指标id
    level: string; //等级
    levelDescription: string; //标准说明
    tenantId: string; //项目名：所属项目:如经济日报：104,新华社：105
}

/**
 * 评分表类型
 */
export enum MarkTargetTypeDeclaration {
    MARK = 1,
    COMBINATION = 2,
}

/**
 * 评分表类型对应的文案
 */
export const markSheetType = new Map([
    [MarkTargetTypeDeclaration.MARK, '评分指标'],
    [MarkTargetTypeDeclaration.COMBINATION, '组合指标'],
]);