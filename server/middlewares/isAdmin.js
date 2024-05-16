import fs from 'fs';

export const isAdmin = (req,res,next) => {

    const allAccounts = JSON.parse(fs.readFileSync('./db/accounts.json', 'utf-8'));
    const account = allAccounts.find(acc => acc.id === req.user.userId);

    req.user.role = account.role;
    next();
}