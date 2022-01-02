export interface Color {
    id: number;
    css_code: string;
    votes: number;
}

export interface ColorList {
    total_votes: number;
    highest_vote_count: number;
    list: Color[];
}

export const Data:  ColorList = {
    total_votes: 310,
    highest_vote_count: 70,
    list:
        [
            {id: 1, css_code: '#9C27B0', votes: 10},
            {id: 2, css_code: '#6A1B9A', votes: 20},
            {id: 3, css_code: '#C2185B', votes: 30},
            {id: 4, css_code: '#FF8F00', votes: 20},
            {id: 5, css_code: '#FF5252', votes: 30},
            {id: 6, css_code: '#009688', votes: 60},
            {id: 7, css_code: '#689F38', votes: 70},
            {id: 8, css_code: '#2196F3', votes: 70},       
        ]
}

