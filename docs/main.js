(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mtvspec/Desktop/projects/test/beejee/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "0rwo":
/*!**********************************************!*\
  !*** ./src/app/state/task/task.selectors.ts ***!
  \**********************************************/
/*! exports provided: getTaskState, getTasks, getIsLoading, getError, createTaskOperationInFly, createTaskOperationPayload, currentTask, editTaskOperationInFly, editTaskOperationPayload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskState", function() { return getTaskState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasks", function() { return getTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTaskOperationInFly", function() { return createTaskOperationInFly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTaskOperationPayload", function() { return createTaskOperationPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentTask", function() { return currentTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editTaskOperationInFly", function() { return editTaskOperationInFly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editTaskOperationPayload", function() { return editTaskOperationPayload; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const getTaskState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('tasks');
const getTasks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getTaskState, state => state.tasks);
const getIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getTaskState, state => state.isLoading);
const getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getTaskState, state => state.error);
const createTaskOperationInFly = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getTaskState, state => state.createTask.operationInFly);
const createTaskOperationPayload = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getTaskState, state => state.createTask.payload);
const currentTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getTaskState, state => state.currentTask);
const editTaskOperationInFly = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getTaskState, state => state.editTask.operationInFly);
const editTaskOperationPayload = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getTaskState, state => state.editTask.payload);


/***/ }),

/***/ "305l":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/auth */ "WMj6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('auth', _state_auth__WEBPACK_IMPORTED_MODULE_2__["authReducer"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreFeatureModule"]] }); })();


/***/ }),

/***/ "3cCP":
/*!********************************************!*\
  !*** ./src/app/state/auth/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.state */ "LJp/");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "FAei");


function authReducer(state = _auth_state__WEBPACK_IMPORTED_MODULE_0__["authInitialState"], action) {
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].Login:
            return Object.assign({}, state, {
                loginInFly: true,
            });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LoginSuccess:
            return Object.assign({}, state, {
                loginInFly: false,
                isAuthenticated: true,
                token: action.payload.message.token,
            });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].isAuthenticated:
            return Object.assign({}, state, {
                isAuthenticated: action.payload.isAuthenticated,
                token: action.payload.token,
            });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LoginError:
            return Object.assign({}, state, {
                loginInFly: false,
                isAuthenticated: true,
                message: action.payload,
            });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].Logout:
            localStorage.clear();
            return Object.assign({}, state, {
                isAuthenticated: false,
                token: null,
            });
        default:
            return state;
    }
}


/***/ }),

/***/ "8rLf":
/*!******************************************************!*\
  !*** ./src/app/shared/services/snack-bar.service.ts ***!
  \******************************************************/
/*! exports provided: SnackBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarService", function() { return SnackBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");


class SnackBarService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    showMessage(message, duration = 3000) {
        this.snackBar.open(message, '', {
            verticalPosition: 'top',
            horizontalPosition: 'right',
            duration,
        });
    }
    showErrorMessage(message, duration = 9000) {
        this.snackBar.open(message, 'Закрыть', {
            verticalPosition: 'top',
            horizontalPosition: 'center',
            duration,
        });
    }
}
SnackBarService.ɵfac = function SnackBarService_Factory(t) { return new (t || SnackBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
SnackBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackBarService, factory: SnackBarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ArSq":
/*!*********************************************!*\
  !*** ./src/app/services/task.datasource.ts ***!
  \*********************************************/
/*! exports provided: TaskDatasource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDatasource", function() { return TaskDatasource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _state_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/task */ "iaHU");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



class TaskDatasource {
    constructor(store) {
        this.store = store;
        this.taskSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
        this.taskListLoading$ = null;
        this.taskList$ = null;
        this.taskListLoading$ = this.store.select(_state_task__WEBPACK_IMPORTED_MODULE_1__["getIsLoading"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(loading => this.loadingSubject.next(loading)))
            .subscribe();
        this.taskList$ = this.store.select(_state_task__WEBPACK_IMPORTED_MODULE_1__["getTasks"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(taskList => {
            this.loadingSubject.next(false);
            this.loadTaskList(taskList.nodes);
        })).subscribe();
    }
    loadTaskList(data) {
        this.taskSubject.next(data);
    }
    connect() {
        return this.taskSubject.asObservable();
    }
    disconnect() {
        this.taskSubject.complete();
        this.loadingSubject.complete();
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    baseUrl: 'https://uxcandy.com/~shapoval/test-task-backend/v2',
};


/***/ }),

/***/ "BiiE":
/*!********************************************!*\
  !*** ./src/app/state/task/task.actions.ts ***!
  \********************************************/
/*! exports provided: TaskActionTypes, GetAllTasks, GetAllTasksSuccess, GetAllTasksError, CreateTask, CreateTaskSuccess, CreateTaskError, CreateTaskOperation, SetCurrentTask, EditTask, EditTaskSuccess, EditTaskError, EditTaskOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskActionTypes", function() { return TaskActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllTasks", function() { return GetAllTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllTasksSuccess", function() { return GetAllTasksSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllTasksError", function() { return GetAllTasksError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTask", function() { return CreateTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskSuccess", function() { return CreateTaskSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskError", function() { return CreateTaskError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskOperation", function() { return CreateTaskOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentTask", function() { return SetCurrentTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTask", function() { return EditTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskSuccess", function() { return EditTaskSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskError", function() { return EditTaskError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskOperation", function() { return EditTaskOperation; });
var TaskActionTypes;
(function (TaskActionTypes) {
    TaskActionTypes["GET_ALL_TASKS"] = "[Task] Get All Tasks";
    TaskActionTypes["GET_ALL_TASKS_SUCCESS"] = "[Task] Get All Tasks Success";
    TaskActionTypes["GET_ALL_TASKS_ERROR"] = "[Task] Get All Tasks Error";
    TaskActionTypes["CREATE_TASK"] = "[Task] Create Task";
    TaskActionTypes["CREATE_TASK_SUCCESS"] = "[Task] Create Task Success";
    TaskActionTypes["CREATE_TASK_ERROR"] = "[Task] Create Task Error";
    TaskActionTypes["CREATE_TASK_OPERATION"] = "[Task] Create Task Operation";
    TaskActionTypes["SET_CURRENT_TASK"] = "[List] Set Current Task";
    TaskActionTypes["EDIT_TASK"] = "[Task] Edit Task";
    TaskActionTypes["EDIT_TASK_SUCCESS"] = "[Task] Edit Task Success";
    TaskActionTypes["EDIT_TASK_ERROR"] = "[Task] Edit Task Error";
    TaskActionTypes["EDIT_TASK_OPERATION"] = "[Task] Edit Task Operation";
})(TaskActionTypes || (TaskActionTypes = {}));
class GetAllTasks {
    constructor(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.GET_ALL_TASKS;
    }
}
class GetAllTasksSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.GET_ALL_TASKS_SUCCESS;
    }
}
class GetAllTasksError {
    constructor(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.GET_ALL_TASKS_ERROR;
    }
}
class CreateTask {
    constructor(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.CREATE_TASK;
    }
}
class CreateTaskSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.CREATE_TASK_SUCCESS;
    }
}
class CreateTaskError {
    constructor(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.CREATE_TASK_ERROR;
    }
}
class CreateTaskOperation {
    constructor(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.CREATE_TASK_OPERATION;
    }
}
class SetCurrentTask {
    constructor(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.SET_CURRENT_TASK;
    }
}
class EditTask {
    constructor(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.EDIT_TASK;
    }
}
class EditTaskSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.EDIT_TASK_SUCCESS;
    }
}
class EditTaskError {
    constructor(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.EDIT_TASK_ERROR;
    }
}
class EditTaskOperation {
    constructor(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.EDIT_TASK_OPERATION;
    }
}


/***/ }),

/***/ "CvMt":
/*!***************************************************!*\
  !*** ./src/app/components/task/task.component.ts ***!
  \***************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_models_task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/task.model */ "tnjF");
/* harmony import */ var _state_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/auth */ "WMj6");
/* harmony import */ var _state_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/task */ "iaHU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
















function TaskComponent_ng_container_0_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u0422\u0435\u043A\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TaskComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u041D\u0430\u0437\u0430\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function TaskComponent_ng_container_0_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r2.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\u0422\u0435\u043A\u0441\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "textarea", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, TaskComponent_ng_container_0_mat_error_11_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "mat-checkbox", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "\u041E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "mat-checkbox", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskComponent_ng_container_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r0.formModel.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.formModel.text == null ? null : ctx_r0.formModel.text.errors == null ? null : ctx_r0.formModel.text.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r0.task.completed)("formControl", ctx_r0.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r0.task.edited)("formControl", ctx_r0.edited);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 8, ctx_r0.operationInFly$));
} }
class TaskComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.operationInFly$ = null;
        this.token$ = null;
        this.task$ = null;
        this.task = null;
        this.formModel = {
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
        };
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](this.formModel);
        this.completed = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.edited = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.edit$ = null;
    }
    ngOnInit() {
        this.operationInFly$ = this.store.select(_state_task__WEBPACK_IMPORTED_MODULE_5__["editTaskOperationInFly"]);
        /*
        Так как API для получения задачи по ее id нет получаю задачу через сервис
        (но если пользователь отправит ссылку на задачу другому пользователю задача не откроется)
        */
        this.task$ = this.store.select(_state_task__WEBPACK_IMPORTED_MODULE_5__["currentTask"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((task) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _a, _b;
            if (task) {
                this.task = task;
                (_a = this.form.get('text')) === null || _a === void 0 ? void 0 : _a.setValue(task === null || task === void 0 ? void 0 : task.text);
                (_b = this.form.get('status')) === null || _b === void 0 ? void 0 : _b.setValue(task === null || task === void 0 ? void 0 : task.status);
                this.completed.setValue(task.completed);
                this.edited.disable();
                this.edited.setValue(task.edited);
            }
            else {
                yield this.router.navigate(['']);
            }
        })))
            .subscribe();
        this.edit$ = this.store.select(_state_task__WEBPACK_IMPORTED_MODULE_5__["editTaskOperationPayload"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (res) {
                this.store.dispatch(new _state_task__WEBPACK_IMPORTED_MODULE_5__["SetCurrentTask"](null));
                this.store.dispatch(new _state_task__WEBPACK_IMPORTED_MODULE_5__["EditTaskOperation"](false));
                yield this.router.navigate(['../']);
            }
        })))
            .subscribe();
    }
    save() {
        this.token$ = this.store.select(_state_auth__WEBPACK_IMPORTED_MODULE_4__["getToken"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(token => {
            var _a, _b;
            if (token && this.form.valid && this.task) {
                /*
                  Определение статуса задачи исходя из состояния задачи
                  */
                let status = this.task.status;
                const completed = this.completed.value;
                const edited = this.task.text !== ((_a = this.form.get('text')) === null || _a === void 0 ? void 0 : _a.value);
                if (!completed && !edited) {
                    status = src_app_models_task_model__WEBPACK_IMPORTED_MODULE_3__["TaskStatus"].NotCompleted;
                }
                else if (completed && !edited) {
                    status = src_app_models_task_model__WEBPACK_IMPORTED_MODULE_3__["TaskStatus"].Completed;
                }
                else if (completed && edited) {
                    status = src_app_models_task_model__WEBPACK_IMPORTED_MODULE_3__["TaskStatus"].CompletedAndEditedByAdmin;
                }
                else if (!completed && edited) {
                    status = src_app_models_task_model__WEBPACK_IMPORTED_MODULE_3__["TaskStatus"].NotCompletedAndEditedByAdmin;
                }
                this.store.dispatch(new _state_task__WEBPACK_IMPORTED_MODULE_5__["EditTask"]({
                    id: this.task.id,
                    data: {
                        text: (_b = this.form.value) === null || _b === void 0 ? void 0 : _b.text,
                        status,
                    },
                    token,
                }));
            }
        }))
            .subscribe();
    }
    ngOnDestroy() {
        if (this.edit$) {
            this.edit$.unsubscribe();
        }
    }
}
TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["app-task"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["mat-button", "", "routerLink", "../"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "name", "text", "id", "text", "rows", "10", "required", "", 3, "formControl"], [1, "form-control", "checkbox"], ["for", "completed"], ["id", "completed", 3, "checked", "formControl"], ["for", "edited"], ["id", "edited", 3, "checked", "formControl"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "disabled", "click"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, TaskComponent_ng_container_0_Template, 23, 10, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.task);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n}\n\n.form-control.checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  width: 160px;\n}\n\n.form-control.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUFFO0VBQ0UsV0FBQTtBQUVKIiwiZmlsZSI6InRhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZm9ybS1jb250cm9sLmNoZWNrYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDE2MHB4O1xuICBsYWJlbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "FAei":
/*!********************************************!*\
  !*** ./src/app/state/auth/auth.actions.ts ***!
  \********************************************/
/*! exports provided: AuthActionTypes, Login, LoginSuccess, LoginError, IsAuthenticated, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginError", function() { return LoginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAuthenticated", function() { return IsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["Login"] = "[Auth] Login";
    AuthActionTypes["LoginSuccess"] = "[Auth] Login Success";
    AuthActionTypes["LoginError"] = "[Auth] Login Error";
    AuthActionTypes["isAuthenticated"] = "[Auth] Is authenticated";
    AuthActionTypes["Logout"] = "[Auth] Logout";
})(AuthActionTypes || (AuthActionTypes = {}));
class Login {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.Login;
    }
}
class LoginSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LoginSuccess;
    }
}
class LoginError {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LoginError;
    }
}
class IsAuthenticated {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.isAuthenticated;
    }
}
class Logout {
    constructor() {
        this.type = AuthActionTypes.Logout;
    }
}


/***/ }),

/***/ "FuVC":
/*!*********************************************!*\
  !*** ./src/app/modules/task/task.module.ts ***!
  \*********************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/task */ "iaHU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class TaskModule {
}
TaskModule.ɵfac = function TaskModule_Factory(t) { return new (t || TaskModule)(); };
TaskModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TaskModule });
TaskModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('tasks', _state_task__WEBPACK_IMPORTED_MODULE_2__["taskReducer"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TaskModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreFeatureModule"]] }); })();


/***/ }),

/***/ "IGZg":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, clearState, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearState", function() { return clearState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _state_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/auth */ "WMj6");
/* harmony import */ var _state_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/task */ "iaHU");


const reducers = {
    tasks: _state_task__WEBPACK_IMPORTED_MODULE_1__["taskReducer"],
    auth: _state_auth__WEBPACK_IMPORTED_MODULE_0__["authReducer"],
};
function clearState(reducer) {
    return (state, action) => {
        return reducer(state, action);
    };
}
const metaReducers = [clearState];


/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _state_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/auth */ "WMj6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







function MainComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0412\u043E\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0412\u044B\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class MainComponent {
    constructor(store) {
        this.store = store;
        this.isAuthenticated$ = null;
    }
    ngOnInit() {
        this.isAuthenticated$ = this.store.select(_state_auth__WEBPACK_IMPORTED_MODULE_0__["getIsAuthenticated"]);
    }
    logout() {
        this.store.dispatch(new _state_auth__WEBPACK_IMPORTED_MODULE_0__["Logout"]());
    }
    ngOnDestroy() { }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 7, vars: 6, consts: [[1, "spacer"], ["mat-button", "", "routerLink", "login", 4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", "routerLink", "login"], ["mat-button", "", 3, "click"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainComponent_button_2_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MainComponent_button_4_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.isAuthenticated$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, ctx.isAuthenticated$));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "LJp/":
/*!******************************************!*\
  !*** ./src/app/state/auth/auth.state.ts ***!
  \******************************************/
/*! exports provided: authInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInitialState", function() { return authInitialState; });
const authInitialState = {
    loginInFly: false,
    isAuthenticated: false,
    token: null,
};


/***/ }),

/***/ "LOCc":
/*!*********************************!*\
  !*** ./src/app/config/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    developer: 'mtvspec',
});


/***/ }),

/***/ "LzQu":
/*!*******************************************!*\
  !*** ./src/app/shared/constants/index.ts ***!
  \*******************************************/
/*! exports provided: OperationStatus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationStatus", function() { return OperationStatus; });
var OperationStatus;
(function (OperationStatus) {
    OperationStatus["Ok"] = "ok";
    OperationStatus["Error"] = "error";
})(OperationStatus || (OperationStatus = {}));
/* harmony default export */ __webpack_exports__["default"] = ({
    OperationStatus,
});


/***/ }),

/***/ "Sf88":
/*!******************************************!*\
  !*** ./src/app/state/task/task.state.ts ***!
  \******************************************/
/*! exports provided: taskInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskInitialState", function() { return taskInitialState; });
const taskInitialState = {
    tasks: {
        totalCount: 0,
        nodes: [],
    },
    isLoading: false,
    error: null,
    createTask: {
        operationInFly: null,
        payload: null,
    },
    currentTask: null,
    editTask: {
        operationInFly: null,
        payload: null,
    }
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TiQC":
/*!**********************************************!*\
  !*** ./src/app/state/auth/auth.selectors.ts ***!
  \**********************************************/
/*! exports provided: getAuthState, getLoginInFly, getIsAuthenticated, getToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthState", function() { return getAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginInFly", function() { return getLoginInFly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAuthenticated", function() { return getIsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const getAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');
const getLoginInFly = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, state => state.loginInFly);
const getIsAuthenticated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, state => state.isAuthenticated);
const getToken = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, state => state.token);


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        const isAuthenticated = !!this.authService.getToken();
        if (!isAuthenticated) {
            this.router.navigate(['login']);
        }
        return isAuthenticated;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "W/RB":
/*!************************************************************!*\
  !*** ./src/app/shared/modules/material/material.module.ts ***!
  \************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"]] }); })();


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _state_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/auth */ "WMj6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function LoginComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041F\u0430\u0440\u043E\u043B\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(store) {
        this.store = store;
        this.loginInFly$ = null;
        this.formModel = {
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            ]),
        };
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"](this.formModel);
    }
    ngOnInit() {
        this.loginInFly$ = this.store.select(_state_auth__WEBPACK_IMPORTED_MODULE_1__["getLoginInFly"]);
        localStorage.clear();
    }
    login() {
        if (this.form.valid) {
            this.store.dispatch(new _state_auth__WEBPACK_IMPORTED_MODULE_1__["Login"](this.form.value));
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 8, consts: [[3, "formGroup", "ngSubmit"], ["type", "text", "matInput", "", "id", "username", "name", "username", "required", "", "autocomplete", "off", "autofocus", "", 3, "formControl"], [4, "ngIf"], ["type", "password", "matInput", "", "id", "password", "name", "password", "required", "", "autocomplete", "off", 3, "formControl"], ["mat-raised-button", "", "color", "primary", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u041B\u043E\u0433\u0438\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LoginComponent_mat_error_8_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u041F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, LoginComponent_mat_error_13_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " \u0412\u043E\u0439\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.formModel.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formModel.username == null ? null : ctx.formModel.username.errors == null ? null : ctx.formModel.username.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.formModel.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formModel.password == null ? null : ctx.formModel.password.errors == null ? null : ctx.formModel.password.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 6, ctx.loginInFly$));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMjBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "WMj6":
/*!*************************************!*\
  !*** ./src/app/state/auth/index.ts ***!
  \*************************************/
/*! exports provided: AuthActionTypes, Login, LoginSuccess, LoginError, IsAuthenticated, Logout, authReducer, authInitialState, getAuthState, getLoginInFly, getIsAuthenticated, getToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "FAei");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["LoginSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginError", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["LoginError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsAuthenticated", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["IsAuthenticated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["Logout"]; });

/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.reducer */ "3cCP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authReducer"]; });

/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.state */ "LJp/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authInitialState", function() { return _auth_state__WEBPACK_IMPORTED_MODULE_2__["authInitialState"]; });

/* harmony import */ var _auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.selectors */ "TiQC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuthState", function() { return _auth_selectors__WEBPACK_IMPORTED_MODULE_3__["getAuthState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginInFly", function() { return _auth_selectors__WEBPACK_IMPORTED_MODULE_3__["getLoginInFly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsAuthenticated", function() { return _auth_selectors__WEBPACK_IMPORTED_MODULE_3__["getIsAuthenticated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return _auth_selectors__WEBPACK_IMPORTED_MODULE_3__["getToken"]; });







/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/modules/material/material.module */ "W/RB");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _state_task_task_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state/task/task.effects */ "p1mI");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/task-list/task-list.component */ "zRHw");
/* harmony import */ var _components_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/new-task/new-task.component */ "ivPX");
/* harmony import */ var _components_task_task_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/task/task.component */ "CvMt");
/* harmony import */ var _modules_task_task_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/task/task.module */ "FuVC");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./reducers */ "IGZg");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/auth/auth.module */ "305l");
/* harmony import */ var _state_auth_auth_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./state/auth/auth.effects */ "kGYc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");

























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_18__["reducers"], {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                },
                metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_18__["metaReducers"]
            }),
            !src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production,
                autoPause: true,
            }) : [],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([
                _state_auth_auth_effects__WEBPACK_IMPORTED_MODULE_20__["AuthEffects"],
                _state_task_task_effects__WEBPACK_IMPORTED_MODULE_10__["TaskEffects"],
            ]),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_19__["AuthModule"],
            _modules_task_task_module__WEBPACK_IMPORTED_MODULE_17__["TaskModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"],
        _components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_14__["TaskListComponent"],
        _components_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_15__["NewTaskComponent"],
        _components_task_task_component__WEBPACK_IMPORTED_MODULE_16__["TaskComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsRootModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_19__["AuthModule"],
        _modules_task_task_module__WEBPACK_IMPORTED_MODULE_17__["TaskModule"]] }); })();


/***/ }),

/***/ "i6c7":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants */ "LzQu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "LOCc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/snack-bar.service */ "8rLf");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config.service */ "r4Kj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










class TaskService {
    constructor(http, snackBar, configService, router) {
        this.http = http;
        this.snackBar = snackBar;
        this.configService = configService;
        this.router = router;
        this.currentTask = null;
        this.taskApi = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl}`;
    }
    getAll(options) {
        var _a, _b, _c;
        let params;
        if (options) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('developer', _config__WEBPACK_IMPORTED_MODULE_4__["default"].developer)
                .set('sort_field', (_a = options === null || options === void 0 ? void 0 : options.sortField) !== null && _a !== void 0 ? _a : '')
                .set('sort_direction', (_b = options === null || options === void 0 ? void 0 : options.sortDirection) !== null && _b !== void 0 ? _b : 'asc')
                .set('page', (_c = options === null || options === void 0 ? void 0 : options.page) !== null && _c !== void 0 ? _c : '1');
        }
        else {
            params = this.configService.getConfig().params;
        }
        return this.http.get(`${this.taskApi}/`, { params });
    }
    create(data) {
        const formData = new FormData();
        formData.set('username', data.username);
        formData.set('email', data.email);
        formData.set('text', data.text);
        return this.http.post(`${this.taskApi}/create`, formData, this.configService.getConfig())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => {
            switch (payload.status) {
                case src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__["OperationStatus"].Error:
                    this.showErrorMessage('Не удалось создать задачу');
                    return payload;
                case src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__["OperationStatus"].Ok:
                    this.showMessage('Задача создана');
                    return payload;
            }
        }));
    }
    edit(data) {
        const formData = new FormData();
        formData.set('text', data.data.text);
        formData.set('status', data.data.status.toString());
        formData.set('token', data.token);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('developer', _config__WEBPACK_IMPORTED_MODULE_4__["default"].developer)
            .set('token', data.token);
        return this.http.post(`${this.taskApi}/edit/${data.id}`, formData, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => {
            var _a;
            switch (payload.status) {
                case src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__["OperationStatus"].Error:
                    if ((_a = payload === null || payload === void 0 ? void 0 : payload.message) === null || _a === void 0 ? void 0 : _a.token) {
                        this.router.navigate(['login']);
                    }
                    this.showErrorMessage('Не удалось сохранить изменения');
                    return payload;
                case src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__["OperationStatus"].Ok:
                    this.showMessage('Изменения сохранены');
                    return payload;
            }
        }));
    }
    getCurrentTask() {
        return this.currentTask;
    }
    showMessage(message) {
        this.snackBar.showMessage(message);
    }
    showErrorMessage(message) {
        this.snackBar.showErrorMessage(message);
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "iaHU":
/*!*************************************!*\
  !*** ./src/app/state/task/index.ts ***!
  \*************************************/
/*! exports provided: TaskActionTypes, GetAllTasks, GetAllTasksSuccess, GetAllTasksError, CreateTask, CreateTaskSuccess, CreateTaskError, CreateTaskOperation, SetCurrentTask, EditTask, EditTaskSuccess, EditTaskError, EditTaskOperation, taskReducer, taskInitialState, getTaskState, getTasks, getIsLoading, getError, createTaskOperationInFly, createTaskOperationPayload, currentTask, editTaskOperationInFly, editTaskOperationPayload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.actions */ "BiiE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskActionTypes", function() { return _task_actions__WEBPACK_IMPORTED_MODULE_0__["TaskActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAllTasks", function() { return _task_actions__WEBPACK_IMPORTED_MODULE_0__["GetAllTasks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAllTasksSuccess", function() { return _task_actions__WEBPACK_IMPORTED_MODULE_0__["GetAllTasksSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAllTasksError", function() { return _task_actions__WEBPACK_IMPORTED_MODULE_0__["GetAllTasksError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateTask", function() { return _task_actions__WEBPACK_IMPORTED_MODULE_0__["CreateTask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateTaskSuccess", function() { return _task_actions__WEBPACK_IMPORTED_MODULE_0__["CreateTaskSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateTaskError", function() { return _task_actions__WEBPACK_IMPORTED_MODULE_0__["CreateTaskError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateTaskOperation", function() { return _task_actions__WEBPACK_IMPORTED_MODULE_0__["CreateTaskOperation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCurrentTask", function() { return _task_actions__WEBPACK_IMPORTED_MODULE_0__["SetCurrentTask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditTask", function() { return _task_actions__WEBPACK_IMPORTED_MODULE_0__["EditTask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditTaskSuccess", function() { return _task_actions__WEBPACK_IMPORTED_MODULE_0__["EditTaskSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditTaskError", function() { return _task_actions__WEBPACK_IMPORTED_MODULE_0__["EditTaskError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditTaskOperation", function() { return _task_actions__WEBPACK_IMPORTED_MODULE_0__["EditTaskOperation"]; });

/* harmony import */ var _task_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.reducer */ "uzCL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "taskReducer", function() { return _task_reducer__WEBPACK_IMPORTED_MODULE_1__["taskReducer"]; });

/* harmony import */ var _task_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.state */ "Sf88");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "taskInitialState", function() { return _task_state__WEBPACK_IMPORTED_MODULE_2__["taskInitialState"]; });

/* harmony import */ var _task_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.selectors */ "0rwo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTaskState", function() { return _task_selectors__WEBPACK_IMPORTED_MODULE_3__["getTaskState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTasks", function() { return _task_selectors__WEBPACK_IMPORTED_MODULE_3__["getTasks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return _task_selectors__WEBPACK_IMPORTED_MODULE_3__["getIsLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return _task_selectors__WEBPACK_IMPORTED_MODULE_3__["getError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTaskOperationInFly", function() { return _task_selectors__WEBPACK_IMPORTED_MODULE_3__["createTaskOperationInFly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTaskOperationPayload", function() { return _task_selectors__WEBPACK_IMPORTED_MODULE_3__["createTaskOperationPayload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currentTask", function() { return _task_selectors__WEBPACK_IMPORTED_MODULE_3__["currentTask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "editTaskOperationInFly", function() { return _task_selectors__WEBPACK_IMPORTED_MODULE_3__["editTaskOperationInFly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "editTaskOperationPayload", function() { return _task_selectors__WEBPACK_IMPORTED_MODULE_3__["editTaskOperationPayload"]; });







/***/ }),

/***/ "ivPX":
/*!***********************************************************!*\
  !*** ./src/app/components/new-task/new-task.component.ts ***!
  \***********************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/task */ "iaHU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













function NewTaskComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NewTaskComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Email \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NewTaskComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NewTaskComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u0422\u0435\u043A\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class NewTaskComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.create$ = null;
        this.formModel = {
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
            ]),
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
        };
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](this.formModel);
        this.operationInFly$ = null;
    }
    ngOnInit() {
        this.operationInFly$ = this.store.select(_state_task__WEBPACK_IMPORTED_MODULE_3__["createTaskOperationInFly"]);
        this.create$ = this.store.select(_state_task__WEBPACK_IMPORTED_MODULE_3__["createTaskOperationPayload"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((payload) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (payload) {
                this.store.dispatch(new _state_task__WEBPACK_IMPORTED_MODULE_3__["CreateTaskOperation"](false));
                yield this.router.navigate(['../']);
            }
        })))
            .subscribe();
    }
    create() {
        if (this.form.valid) {
            this.store.dispatch(new _state_task__WEBPACK_IMPORTED_MODULE_3__["CreateTask"](this.form.value));
        }
    }
    ngOnDestroy() {
        if (this.create$) {
            this.create$.unsubscribe();
        }
    }
}
NewTaskComponent.ɵfac = function NewTaskComponent_Factory(t) { return new (t || NewTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
NewTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NewTaskComponent, selectors: [["app-new-task"]], decls: 25, vars: 11, consts: [["mat-button", "", "routerLink", "../"], [3, "formGroup", "ngSubmit"], ["type", "text", "matInput", "", "id", "username", "name", "username", "required", "", "autocomplete", "off", "autofocus", "", 3, "formControl"], [4, "ngIf"], ["type", "text", "matInput", "", "id", "email", "name", "email", "required", "", "autocomplete", "off", 3, "formControl"], ["type", "text", "matInput", "", "id", "text", "name", "text", "required", "", 3, "formControl"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"]], template: function NewTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u041D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " \u041D\u043E\u0432\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function NewTaskComponent_Template_form_ngSubmit_5_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, NewTaskComponent_mat_error_10_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, NewTaskComponent_mat_error_15_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, NewTaskComponent_mat_error_16_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\u0422\u0435\u043A\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, NewTaskComponent_mat_error_21_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " \u0421\u043E\u0437\u0434\u0430\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.formModel.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formModel.username == null ? null : ctx.formModel.username.errors == null ? null : ctx.formModel.username.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.formModel.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formModel.email == null ? null : ctx.formModel.email.errors == null ? null : ctx.formModel.email.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formModel.email == null ? null : ctx.formModel.email.errors == null ? null : ctx.formModel.email.errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.formModel.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formModel.text == null ? null : ctx.formModel.text.errors == null ? null : ctx.formModel.text.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 9, ctx.operationInFly$));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25ldy10YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6Im5ldy10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMjBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "kGYc":
/*!********************************************!*\
  !*** ./src/app/state/auth/auth.effects.ts ***!
  \********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth */ "WMj6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constants */ "LzQu");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _shared_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/snack-bar.service */ "8rLf");









class AuthEffects {
    constructor(actions$, authService, snackBar) {
        this.actions$ = actions$;
        this.authService = authService;
        this.snackBar = snackBar;
        this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_auth__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].Login), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(data => this.authService.login(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(payload => {
            var _a, _b, _c;
            switch (payload.status) {
                case _shared_constants__WEBPACK_IMPORTED_MODULE_3__["OperationStatus"].Error:
                    if ((_a = payload.message) === null || _a === void 0 ? void 0 : _a.username) {
                        this.snackBar.showErrorMessage(payload.message.username);
                    }
                    if ((_b = payload.message) === null || _b === void 0 ? void 0 : _b.password) {
                        this.snackBar.showErrorMessage(payload.message.password);
                    }
                    if ((_c = payload.message) === null || _c === void 0 ? void 0 : _c.token) {
                        this.snackBar.showErrorMessage(payload.message.token);
                    }
                    return (new _auth__WEBPACK_IMPORTED_MODULE_1__["LoginError"](payload));
                case _shared_constants__WEBPACK_IMPORTED_MODULE_3__["OperationStatus"].Ok:
                    return (new _auth__WEBPACK_IMPORTED_MODULE_1__["LoginSuccess"](payload));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _auth__WEBPACK_IMPORTED_MODULE_1__["LoginError"](error)))))));
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_7__["SnackBarService"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/constants */ "LzQu");
/* harmony import */ var _state_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/auth */ "WMj6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/snack-bar.service */ "8rLf");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config.service */ "r4Kj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "l7P3");










class AuthService {
    constructor(http, snackBar, configService, router, store) {
        this.http = http;
        this.snackBar = snackBar;
        this.configService = configService;
        this.router = router;
        this.store = store;
        this.token = null;
        this.taskApi = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}`;
        this.getToken();
    }
    login(data) {
        const formData = new FormData();
        formData.set('username', data.username);
        formData.set('password', data.password);
        return this.http.post(`${this.taskApi}/login`, formData, this.configService.getConfig())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => {
            var _a, _b, _c;
            switch (response.status) {
                case src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__["OperationStatus"].Error:
                    if ((_a = response.message) === null || _a === void 0 ? void 0 : _a.username) {
                        this.showErrorMessage(response.message.username);
                    }
                    if ((_b = response.message) === null || _b === void 0 ? void 0 : _b.password) {
                        this.showErrorMessage(response.message.password);
                    }
                    return response;
                case src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__["OperationStatus"].Ok:
                    if ((_c = response.message) === null || _c === void 0 ? void 0 : _c.token) {
                        this.setToken(response.message.token);
                        this.store.dispatch(new _state_auth__WEBPACK_IMPORTED_MODULE_3__["IsAuthenticated"]({ isAuthenticated: true, token: response.message.token }));
                    }
                    this.router.navigate(['']);
                    return response;
            }
        }));
    }
    getToken() {
        const token = localStorage.getItem('token');
        if (token) {
            this.token = token;
            this.store.dispatch(new _state_auth__WEBPACK_IMPORTED_MODULE_3__["IsAuthenticated"]({ isAuthenticated: true, token }));
            return this.token;
        }
        else {
            this.store.dispatch(new _state_auth__WEBPACK_IMPORTED_MODULE_3__["IsAuthenticated"]({ isAuthenticated: false, token: null }));
            return null;
        }
    }
    setToken(token) {
        localStorage.setItem('token', token);
        this.token = token;
    }
    logout() {
        this.store.dispatch(new _state_auth__WEBPACK_IMPORTED_MODULE_3__["IsAuthenticated"]({ isAuthenticated: false, token: null }));
        localStorage.clear();
        this.token = null;
        this.router.navigate(['']);
    }
    showErrorMessage(message) {
        this.snackBar.showErrorMessage(message);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "p1mI":
/*!********************************************!*\
  !*** ./src/app/state/task/task.effects.ts ***!
  \********************************************/
/*! exports provided: TaskEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEffects", function() { return TaskEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_models_task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/task.model */ "tnjF");
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/constants */ "LzQu");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task */ "iaHU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/task.service */ "i6c7");
/* harmony import */ var src_app_shared_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/snack-bar.service */ "8rLf");










class TaskEffects {
    constructor(actions$, taskService, snackBar) {
        this.actions$ = actions$;
        this.taskService = taskService;
        this.snackBar = snackBar;
        this.loadAllTasks$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_task__WEBPACK_IMPORTED_MODULE_5__["TaskActionTypes"].GET_ALL_TASKS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((action) => action === null || action === void 0 ? void 0 : action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(data => this.taskService.getAll(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(payload => {
            switch (payload.status) {
                case src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["OperationStatus"].Error:
                    this.snackBar.showErrorMessage(payload.message);
                    return (new _task__WEBPACK_IMPORTED_MODULE_5__["GetAllTasksError"]({ message: payload.message }));
                case src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["OperationStatus"].Ok:
                    return (new _task__WEBPACK_IMPORTED_MODULE_5__["GetAllTasksSuccess"]({
                        totalCount: payload.message.total_task_count,
                        nodes: payload.message.tasks.map(task => new src_app_models_task_model__WEBPACK_IMPORTED_MODULE_3__["Task"](task)),
                    }));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _task__WEBPACK_IMPORTED_MODULE_5__["GetAllTasksError"]({ message: error.message })))))));
        this.createTask$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_task__WEBPACK_IMPORTED_MODULE_5__["TaskActionTypes"].CREATE_TASK), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(data => this.taskService.create(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(payload => {
            switch (payload.status) {
                case src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["OperationStatus"].Ok:
                    return (new _task__WEBPACK_IMPORTED_MODULE_5__["CreateTaskSuccess"](payload));
                case src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["OperationStatus"].Error:
                    return (new _task__WEBPACK_IMPORTED_MODULE_5__["CreateTaskError"](payload));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ type: '[Task API] Create Task Error' }))))));
        this.editTask$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_task__WEBPACK_IMPORTED_MODULE_5__["TaskActionTypes"].EDIT_TASK), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(data => this.taskService.edit(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(payload => {
            switch (payload.status) {
                case src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["OperationStatus"].Ok:
                    return (new _task__WEBPACK_IMPORTED_MODULE_5__["EditTaskSuccess"](payload));
                case src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["OperationStatus"].Error:
                    return (new _task__WEBPACK_IMPORTED_MODULE_5__["EditTaskError"](payload));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ type: '[Task API] Edit Task Error' }))))));
    }
}
TaskEffects.ɵfac = function TaskEffects_Factory(t) { return new (t || TaskEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_shared_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_8__["SnackBarService"])); };
TaskEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: TaskEffects, factory: TaskEffects.ɵfac });


/***/ }),

/***/ "r4Kj":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "LOCc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ConfigService {
    constructor() { }
    getConfig() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('developer', _config__WEBPACK_IMPORTED_MODULE_1__["default"].developer);
        return {
            params,
        };
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tnjF":
/*!**************************************!*\
  !*** ./src/app/models/task.model.ts ***!
  \**************************************/
/*! exports provided: Task, TaskStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatus", function() { return TaskStatus; });
class Task {
    constructor(data) {
        this.completed = false;
        this.edited = false;
        this.id = data.id;
        this.username = data.username;
        this.email = data.email;
        this.text = data.text;
        this.status = data.status;
        switch (data.status) {
            case TaskStatus.NotCompleted:
                this.completed = false;
                this.edited = false;
                break;
            case TaskStatus.NotCompletedAndEditedByAdmin:
                this.completed = false;
                this.edited = true;
                break;
            case TaskStatus.Completed:
                this.completed = true;
                this.edited = false;
                break;
            case TaskStatus.CompletedAndEditedByAdmin:
                this.completed = true;
                this.edited = true;
                break;
            default:
                break;
        }
    }
}
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["NotCompleted"] = 0] = "NotCompleted";
    TaskStatus[TaskStatus["NotCompletedAndEditedByAdmin"] = 1] = "NotCompletedAndEditedByAdmin";
    TaskStatus[TaskStatus["Completed"] = 10] = "Completed";
    TaskStatus[TaskStatus["CompletedAndEditedByAdmin"] = 11] = "CompletedAndEditedByAdmin";
})(TaskStatus || (TaskStatus = {}));


/***/ }),

/***/ "uzCL":
/*!********************************************!*\
  !*** ./src/app/state/task/task.reducer.ts ***!
  \********************************************/
/*! exports provided: taskReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskReducer", function() { return taskReducer; });
/* harmony import */ var _task_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.state */ "Sf88");
/* harmony import */ var _task_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.actions */ "BiiE");


function taskReducer(state = _task_state__WEBPACK_IMPORTED_MODULE_0__["taskInitialState"], action) {
    switch (action.type) {
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].GET_ALL_TASKS:
            return Object.assign({}, state, {
                isLoading: true
            });
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].GET_ALL_TASKS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                tasks: action.payload,
            });
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].GET_ALL_TASKS_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.payload.message,
            });
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].CREATE_TASK:
            return Object.assign({}, state, {
                createTask: {
                    operationInFly: true,
                }
            });
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].CREATE_TASK_SUCCESS:
            return Object.assign({}, state, {
                createTask: {
                    operationInFly: false,
                    payload: action.payload,
                }
            });
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].CREATE_TASK_ERROR:
            return Object.assign({}, state, {
                createTask: {
                    operationInFly: false,
                    payload: action.payload,
                }
            });
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].CREATE_TASK_OPERATION:
            return Object.assign({}, state, {
                createTask: {
                    payload: action.payload,
                }
            });
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].SET_CURRENT_TASK:
            return Object.assign({}, state, {
                currentTask: action.payload
            });
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].EDIT_TASK:
            return Object.assign({}, state, {
                editTask: {
                    operationInFly: true,
                }
            });
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].EDIT_TASK_SUCCESS:
            return Object.assign({}, state, {
                editTask: {
                    operationInFly: false,
                    payload: action.payload,
                }
            });
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].EDIT_TASK_ERROR:
            return Object.assign({}, state, {
                editTask: {
                    operationInFly: false,
                    payload: action.payload,
                }
            });
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].EDIT_TASK_OPERATION:
            return Object.assign({}, state, {
                editTask: {
                    payload: action.payload,
                }
            });
        default:
            return state;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/new-task/new-task.component */ "ivPX");
/* harmony import */ var _components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/task-list/task-list.component */ "zRHw");
/* harmony import */ var _components_task_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/task/task.component */ "CvMt");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    {
        path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
    },
    {
        path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], children: [
            {
                path: 'task-list', children: [
                    {
                        path: '', component: _components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_4__["TaskListComponent"],
                    },
                    {
                        path: 'new', component: _components_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_3__["NewTaskComponent"],
                    },
                    {
                        path: ':taskId', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], component: _components_task_task_component__WEBPACK_IMPORTED_MODULE_5__["TaskComponent"],
                    },
                ],
            },
            {
                path: '', pathMatch: 'full', redirectTo: 'task-list',
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zRHw":
/*!*************************************************************!*\
  !*** ./src/app/components/task-list/task-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var _state_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/task */ "iaHU");
/* harmony import */ var src_app_services_task_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/task.datasource */ "ArSq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");













function TaskListComponent_ng_container_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TaskListComponent_ng_container_0_table_7_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TaskListComponent_ng_container_0_table_7_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r16.username, " ");
} }
function TaskListComponent_ng_container_0_table_7_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TaskListComponent_ng_container_0_table_7_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r17.email, " ");
} }
function TaskListComponent_ng_container_0_table_7_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0422\u0435\u043A\u0441\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TaskListComponent_ng_container_0_table_7_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r18.text, " ");
} }
function TaskListComponent_ng_container_0_table_7_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TaskListComponent_ng_container_0_table_7_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-checkbox", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", element_r19.completed);
} }
function TaskListComponent_ng_container_0_table_7_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TaskListComponent_ng_container_0_table_7_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-checkbox", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", element_r20.edited);
} }
function TaskListComponent_ng_container_0_table_7_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 34);
} }
function TaskListComponent_ng_container_0_table_7_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskListComponent_ng_container_0_table_7_tr_17_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const row_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r22.onSelectTask(row_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", row_r21.id);
} }
function TaskListComponent_ng_container_0_table_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("matSortChange", function TaskListComponent_ng_container_0_table_7_Template_table_matSortChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r24.onSortChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TaskListComponent_ng_container_0_table_7_th_2_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TaskListComponent_ng_container_0_table_7_td_3_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TaskListComponent_ng_container_0_table_7_th_5_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TaskListComponent_ng_container_0_table_7_td_6_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](7, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TaskListComponent_ng_container_0_table_7_th_8_Template, 2, 0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TaskListComponent_ng_container_0_table_7_td_9_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](10, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TaskListComponent_ng_container_0_table_7_th_11_Template, 2, 0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TaskListComponent_ng_container_0_table_7_td_12_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](13, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, TaskListComponent_ng_container_0_table_7_th_14_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TaskListComponent_ng_container_0_table_7_td_15_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TaskListComponent_ng_container_0_table_7_tr_16_Template, 1, 0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TaskListComponent_ng_container_0_table_7_tr_17_Template, 1, 1, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r3.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedColumns);
} }
const _c0 = function () { return [2, 4, 6, 10, 20]; };
function TaskListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TaskListComponent_ng_container_0_div_5_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TaskListComponent_ng_container_0_table_7_Template, 18, 3, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-paginator", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function TaskListComponent_ng_container_0_Template_mat_paginator_page_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.onPageEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const taskList_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, ctx_r0.dataSource == null ? null : ctx_r0.dataSource.loading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidePageSize", true)("length", taskList_r1.totalCount)("pageSize", 3)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
} }
class TaskListComponent {
    constructor(store) {
        this.store = store;
        this.displayedColumns = [
            'username',
            'email',
            'text',
            'completed',
            'edited',
        ];
        this.taskList$ = null;
        this.dataSource = null;
    }
    ngOnInit() {
        this.dataSource = new src_app_services_task_datasource__WEBPACK_IMPORTED_MODULE_1__["TaskDatasource"](this.store);
        this.taskList$ = this.store.select(_state_task__WEBPACK_IMPORTED_MODULE_0__["getTasks"]);
        this.fetchTaskList();
    }
    onSortChange(event) {
        this.fetchTaskList({
            sortField: event.active,
            sortDirection: event.direction,
        });
    }
    onPageEvent(pageEvent) {
        this.fetchTaskList({
            page: (pageEvent.pageIndex + 1).toString()
        });
    }
    onSelectTask(task) {
        this.store.dispatch(new _state_task__WEBPACK_IMPORTED_MODULE_0__["SetCurrentTask"](task));
    }
    fetchTaskList(options = {
        sortField: 'id',
        sortDirection: 'desc',
    }) {
        this.store.dispatch(new _state_task__WEBPACK_IMPORTED_MODULE_0__["GetAllTasks"](options));
    }
}
TaskListComponent.ɵfac = function TaskListComponent_Factory(t) { return new (t || TaskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
TaskListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TaskListComponent, selectors: [["app-task-list"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "spacer"], ["mat-button", "", "color", "primary", "routerLink", "new"], ["class", "spinner-container", 4, "ngIf"], ["mat-table", "", "matSort", "", 3, "dataSource", "matSortChange", 4, "ngIf"], [3, "hidePageSize", "length", "pageSize", "pageSizeOptions", "page"], [1, "spinner-container"], ["mat-table", "", "matSort", "", 3, "dataSource", "matSortChange"], ["matColumnDef", "username"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "username", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["class", "email", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "text"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "text", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "completed"], ["class", "completed", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "completed", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "edited"], ["class", "edited", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "edited", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "routerLink", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "username"], ["mat-cell", "", 1, "email"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text"], ["mat-header-cell", "", 1, "completed"], ["mat-cell", "", 1, "completed"], ["disabled", "", 3, "checked"], ["mat-header-cell", "", 1, "edited"], ["mat-cell", "", 1, "edited"], ["mat-header-row", ""], ["mat-row", "", 3, "routerLink", "click"]], template: function TaskListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TaskListComponent_ng_container_0_Template, 9, 9, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.taskList$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #fafafa;\n}\n\ntd.username[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n\ntd.email[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\ntd.text[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.completed[_ngcontent-%COMP%] {\n  min-width: 100px;\n  text-align: center;\n}\n\nth.edited[_ngcontent-%COMP%] {\n  min-width: 100px;\n  text-align: center;\n}\n\ntd.completed[_ngcontent-%COMP%] {\n  min-width: 100px;\n  text-align: center;\n}\n\ntd.edited[_ngcontent-%COMP%] {\n  min-width: 100px;\n  text-align: center;\n}\n\n.spinner-container[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.spinner-container[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rhc2stbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUFFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoidGFzay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmcgIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xuICB9XG59XG5cbnRkLnVzZXJuYW1lIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbn1cblxudGQuZW1haWwge1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG50ZC50ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLmNvbXBsZXRlZCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGguZWRpdGVkIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZC5jb21wbGV0ZWQge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkLmVkaXRlZCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwaW5uZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zcGlubmVyLWNvbnRhaW5lciBtYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map