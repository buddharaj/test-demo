"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchesConsumerFunction = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_lambda_1 = require("aws-cdk-lib/aws-lambda");
const aws_lambda_nodejs_1 = require("aws-cdk-lib/aws-lambda-nodejs");
const path = require("path");
class BatchesConsumerFunction extends aws_lambda_nodejs_1.NodejsFunction {
    constructor(scope) {
        super(scope, 'BatchesConsumerFunction-buddha-1', {
            functionName: 'iap-idp-batches-consumer-function-buddha-1',
            runtime: aws_lambda_1.Runtime.NODEJS_16_X,
            memorySize: 128,
            timeout: aws_cdk_lib_1.Duration.seconds(60),
            // Telling the cdk code to find the lambda logic in this file
            entry: path.join(__dirname, 'code/index.ts'),
            bundling: {
                minify: true
            }
        });
    }
}
exports.BatchesConsumerFunction = BatchesConsumerFunction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBc0M7QUFDdEMsdURBQWdEO0FBQ2hELHFFQUE4RDtBQUU5RCw2QkFBNEI7QUFHNUIsTUFBYSx1QkFBd0IsU0FBUSxrQ0FBYztJQUN6RCxZQUFZLEtBQWdCO1FBQzFCLEtBQUssQ0FBQyxLQUFLLEVBQUUsa0NBQWtDLEVBQUU7WUFDL0MsWUFBWSxFQUFFLDRDQUE0QztZQUMxRCxPQUFPLEVBQUUsb0JBQU8sQ0FBQyxXQUFXO1lBQzVCLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFLHNCQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUM3Qiw2REFBNkQ7WUFDN0QsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQztZQUM1QyxRQUFRLEVBQUU7Z0JBQ1IsTUFBTSxFQUFFLElBQUk7YUFDYjtTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQWRELDBEQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICdhd3MtY2RrLWxpYidcclxuaW1wb3J0IHsgUnVudGltZSB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnXHJcbmltcG9ydCB7IE5vZGVqc0Z1bmN0aW9uIH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYS1ub2RlanMnXHJcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnXHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQmF0Y2hlc0NvbnN1bWVyRnVuY3Rpb24gZXh0ZW5kcyBOb2RlanNGdW5jdGlvbiB7XHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCkge1xyXG4gICAgc3VwZXIoc2NvcGUsICdCYXRjaGVzQ29uc3VtZXJGdW5jdGlvbi1idWRkaGEtMScsIHtcclxuICAgICAgZnVuY3Rpb25OYW1lOiAnaWFwLWlkcC1iYXRjaGVzLWNvbnN1bWVyLWZ1bmN0aW9uLWJ1ZGRoYS0xJyxcclxuICAgICAgcnVudGltZTogUnVudGltZS5OT0RFSlNfMTZfWCxcclxuICAgICAgbWVtb3J5U2l6ZTogMTI4LFxyXG4gICAgICB0aW1lb3V0OiBEdXJhdGlvbi5zZWNvbmRzKDYwKSxcclxuICAgICAgLy8gVGVsbGluZyB0aGUgY2RrIGNvZGUgdG8gZmluZCB0aGUgbGFtYmRhIGxvZ2ljIGluIHRoaXMgZmlsZVxyXG4gICAgICBlbnRyeTogcGF0aC5qb2luKF9fZGlybmFtZSwgJ2NvZGUvaW5kZXgudHMnKSxcclxuICAgICAgYnVuZGxpbmc6IHtcclxuICAgICAgICBtaW5pZnk6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19