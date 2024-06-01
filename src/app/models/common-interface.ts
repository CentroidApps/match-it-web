export interface PaginationModel {
    pageSizeOptions: number[];
    pageSize: number;
    pageIndex: number;
}

export interface AppResponse<T> {
    message: string;
    payload: Pagination<T>
}

export interface Pagination<T> {
    totalItems: number;
    pageSize: number;
    data: T;
}