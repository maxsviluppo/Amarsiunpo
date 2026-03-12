
const fs = require('fs');
const path = require('path');

const targetPath = 'C:\\Users\\Max\\Downloads\\A Codici Main\\SoulMatch-main\\SoulMatch-main\\src\\App.tsx';
let content = fs.readFileSync(targetPath, 'utf8');

// 1. Add import
if (!content.includes('SubscriptionComponents')) {
    content = "import { SubscriptionSuccessPage, SecurityWarningSideBanner } from './SubscriptionComponents';\n" + content;
}

// 2. Remove the corrupted blocks
const startTag = 'const SubscriptionSuccessPage = () => {';
const endTag = 'const SecurityOverlay = ({ status, onClose }:';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    const before = content.substring(0, startIndex);
    const after = content.substring(endIndex);
    content = before + after;
}

// 3. Clean up generic garbage tags seen in grep
content = content.replace(/<\/motion\.div>[v\s>div]*<\/motion\.div>/g, '</motion.div>');
content = content.replace(/<\/div>[v\s>div]*<\/div>/g, '</div>');
content = content.replace(/<\/motion\.div>v+>v*>/g, '</motion.div>');
content = content.replace(/<\/div>v+>/g, '</div>');

fs.writeFileSync(targetPath, content, 'utf8');
console.log('File cleaned successfully');
