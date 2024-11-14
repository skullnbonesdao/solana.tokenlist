export interface ITokenList {
    name:      string;
    logoURI:   string;
    keywords:  string[];
    tags:      ITags;
    timestamp: String;
    tokens:    IToken[];
}

export interface ITags {
    "lp-token": ILpToken;
}

export interface ILpToken {
    name:        string;
    description: string;
}

export interface IToken {
    chainId:  number;
    name:     string;
    symbol:   string;
    address:  string;
    decimals: number;
    logoURI:  string;
    tags:     string[];
    verified: boolean;
    holders:  null;
    tree:     String[];
}


