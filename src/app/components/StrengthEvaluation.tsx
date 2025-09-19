import React, { ReactNode } from "react";

type StrengthEvaluationProps = {
    icon?: string;
    iconArgs?: string;
    title: string;
    percentage: number;
    children?: ReactNode;
};

export default function StrengthEvaluation({icon, iconArgs, title, percentage, children}: StrengthEvaluationProps) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    {children ? (
                        <>{children}</>
                    ) : icon ? (
                        <i className={`devicon-${icon} ${iconArgs} text-4xl`}></i>
                    ) : null}
                    <h3 className="text-xl text-white">{title}</h3>
                </div>
                {/*<span className="text-white">{percentage}%</span>*/}
            </div>
            <div className="h-4 bg-gray-700 rounded-full">
                <div
                    className="h-full animate-[slideIn_1s_ease-out] bg-gradient-to-r from-green-500 to-green-700 rounded-full"
                    style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
}