'use client';

import { useState } from 'react';
import PageLayout from '../../components/PageLayout';

const problems = [
  {
    title: 'Two Sum',
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.`,
    example: `Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]`,
    starterCode: `function twoSum(nums, target) {\n  // Write your code here\n}`,
    solution: `function twoSum(nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i] + nums[j] === target) {\n        return [i, j];\n      }\n    }\n  }\n}`,
    test: (fn: any) => {
      const res = fn([2,7,11,15], 9);
      return Array.isArray(res) && res.length === 2 && res[0] === 0 && res[1] === 1;
    }
  },
  {
    title: 'Reverse String',
    description: `Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.`,
    example: `Input: s = ["h","e","l","l","o"]\nOutput: ["o","l","l","e","h"]`,
    starterCode: `function reverseString(s) {\n  // Write your code here\n}`,
    solution: `function reverseString(s) {\n  let left = 0, right = s.length - 1;\n  while (left < right) {\n    [s[left], s[right]] = [s[right], s[left]];\n    left++;\n    right--;\n  }\n  return s;\n}`,
    test: (fn: any) => {
      const res = fn(["h","e","l","l","o"]);
      return Array.isArray(res) && res.join('') === 'olleh';
    }
  },
  {
    title: 'Palindrome Number',
    description: `Given an integer x, return true if x is a palindrome, and false otherwise.`,
    example: `Input: x = 121\nOutput: true`,
    starterCode: `function isPalindrome(x) {\n  // Write your code here\n}`,
    solution: `function isPalindrome(x) {\n  return x.toString() === x.toString().split('').reverse().join('');\n}`,
    test: (fn: any) => {
      return fn(121) === true && fn(-121) === false && fn(10) === false;
    }
  },
  {
    title: 'Fizz Buzz',
    description: `Given an integer n, return a string array answer (1-indexed) where:\n- answer[i] == "FizzBuzz" if i is divisible by 3 and 5.\n- answer[i] == "Fizz" if i is divisible by 3.\n- answer[i] == "Buzz" if i is divisible by 5.\n- answer[i] == i (as a string) if none of the above conditions are true.`,
    example: `Input: n = 5\nOutput: ["1","2","Fizz","4","Buzz"]`,
    starterCode: `function fizzBuzz(n) {\n  // Write your code here\n}`,
    solution: `function fizzBuzz(n) {\n  const res = [];\n  for (let i = 1; i <= n; i++) {\n    if (i % 15 === 0) res.push("FizzBuzz");\n    else if (i % 3 === 0) res.push("Fizz");\n    else if (i % 5 === 0) res.push("Buzz");\n    else res.push(i.toString());\n  }\n  return res;\n}`,
    test: (fn: any) => {
      const res = fn(5);
      return Array.isArray(res) && res.join(',') === '1,2,Fizz,4,Buzz';
    }
  },
  {
    title: 'Median of Two Sorted Arrays',
    description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).`,
    example: `Input: nums1 = [1,3], nums2 = [2]\nOutput: 2.0`,
    starterCode: `function findMedianSortedArrays(nums1, nums2) {\n  // Write your code here\n}`,
    solution: `function findMedianSortedArrays(nums1, nums2) {\n  const nums = nums1.concat(nums2).sort((a,b)=>a-b);\n  const mid = Math.floor(nums.length/2);\n  if (nums.length % 2 === 0) {\n    return (nums[mid-1] + nums[mid]) / 2;\n  } else {\n    return nums[mid];\n  }\n}`,
    test: (fn: any) => fn([1,3],[2]) === 2.0 && fn([1,2],[3,4]) === 2.5
  },
  {
    title: 'Trapping Rain Water',
    description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`,
    example: `Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6`,
    starterCode: `function trap(height) {\n  // Write your code here\n}`,
    solution: `function trap(height) {\n  let left = 0, right = height.length - 1, leftMax = 0, rightMax = 0, res = 0;\n  while (left < right) {\n    if (height[left] < height[right]) {\n      leftMax = Math.max(leftMax, height[left]);\n      res += leftMax - height[left];\n      left++;\n    } else {\n      rightMax = Math.max(rightMax, height[right]);\n      res += rightMax - height[right];\n      right--;\n    }\n  }\n  return res;\n}`,
    test: (fn: any) => fn([0,1,0,2,1,0,1,3,2,1,2,1]) === 6
  },
  {
    title: 'Edit Distance',
    description: `Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have the following operations permitted on a word: insert a character, delete a character, or replace a character.`,
    example: `Input: word1 = "horse", word2 = "ros"\nOutput: 3`,
    starterCode: `function minDistance(word1, word2) {\n  // Write your code here\n}`,
    solution: `function minDistance(word1, word2) {\n  const dp = Array(word1.length+1).fill().map(()=>Array(word2.length+1).fill(0));\n  for(let i=0;i<=word1.length;i++) dp[i][0]=i;\n  for(let j=0;j<=word2.length;j++) dp[0][j]=j;\n  for(let i=1;i<=word1.length;i++){\n    for(let j=1;j<=word2.length;j++){\n      if(word1[i-1]===word2[j-1]) dp[i][j]=dp[i-1][j-1];\n      else dp[i][j]=1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);\n    }\n  }\n  return dp[word1.length][word2.length];\n}`,
    test: (fn: any) => fn('horse','ros') === 3 && fn('intention','execution') === 5
  },
  {
    title: 'Regular Expression Matching',
    description: `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'.`,
    example: `Input: s = "aa", p = "a*"\nOutput: true`,
    starterCode: `function isMatch(s, p) {\n  // Write your code here\n}`,
    solution: `function isMatch(s, p) {\n  const dp = Array(s.length+1).fill().map(()=>Array(p.length+1).fill(false));\n  dp[0][0]=true;\n  for(let j=1;j<=p.length;j++)\n    if(p[j-1]==='*') dp[0][j]=dp[0][j-2];\n  for(let i=1;i<=s.length;i++){\n    for(let j=1;j<=p.length;j++){\n      if(p[j-1]===s[i-1]||p[j-1]==='.') dp[i][j]=dp[i-1][j-1];\n      else if(p[j-1]==='*'){\n        dp[i][j]=dp[i][j-2];\n        if(p[j-2]===s[i-1]||p[j-2]==='.') dp[i][j]=dp[i][j]||dp[i-1][j];\n      }\n    }\n  }\n  return dp[s.length][p.length];\n}`,
    test: (fn: any) => fn('aa','a*') === true && fn('mississippi','mis*is*p*.') === false
  },
  {
    title: 'Merge k Sorted Lists',
    description: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it. (Use arrays for simplicity)`,
    example: `Input: lists = [[1,4,5],[1,3,4],[2,6]]\nOutput: [1,1,2,3,4,4,5,6]`,
    starterCode: `function mergeKLists(lists) {\n  // Write your code here\n}`,
    solution: `function mergeKLists(lists) {\n  let arr = [].concat(...lists);\n  arr.sort((a,b)=>a-b);\n  return arr;\n}`,
    test: (fn: any) => JSON.stringify(fn([[1,4,5],[1,3,4],[2,6]])) === JSON.stringify([1,1,2,3,4,4,5,6])
  },
  {
    title: 'Longest Valid Parentheses',
    description: `Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.`,
    example: `Input: s = "(()"\nOutput: 2`,
    starterCode: `function longestValidParentheses(s) {\n  // Write your code here\n}`,
    solution: `function longestValidParentheses(s) {\n  let max=0,stack=[-1];\n  for(let i=0;i<s.length;i++){\n    if(s[i]==='(') stack.push(i);\n    else{\n      stack.pop();\n      if(stack.length) max=Math.max(max,i-stack[stack.length-1]);\n      else stack.push(i);\n    }\n  }\n  return max;\n}`,
    test: (fn: any) => fn('(()') === 2 && fn(')()())') === 4
  },
];

export default function GamePage() {
  const [problemIdx, setProblemIdx] = useState(0);
  const [code, setCode] = useState(problems[0].starterCode);
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState<'idle'|'success'|'fail'>('idle');
  const [showSolution, setShowSolution] = useState(false);

  function runCode() {
    try {
      // eslint-disable-next-line no-new-func
      let fn;
      let passed = false;
      if (problemIdx === 0) {
        fn = new Function('nums', 'target', code + '\nreturn twoSum(nums, target);');
        passed = problems[0].test(fn as any);
      } else if (problemIdx === 1) {
        fn = new Function('s', code + '\nreturn reverseString(s);');
        passed = problems[1].test(fn as any);
      } else if (problemIdx === 2) {
        fn = new Function('x', code + '\nreturn isPalindrome(x);');
        passed = problems[2].test(fn as any);
      } else if (problemIdx === 3) {
        fn = new Function('n', code + '\nreturn fizzBuzz(n);');
        passed = problems[3].test(fn as any);
      } else if (problemIdx === 4) {
        fn = new Function('nums1', 'nums2', code + '\nreturn findMedianSortedArrays(nums1, nums2);');
        passed = problems[4].test(fn as any);
      } else if (problemIdx === 5) {
        fn = new Function('height', code + '\nreturn trap(height);');
        passed = problems[5].test(fn as any);
      } else if (problemIdx === 6) {
        fn = new Function('word1', 'word2', code + '\nreturn minDistance(word1, word2);');
        passed = problems[6].test(fn as any);
      } else if (problemIdx === 7) {
        fn = new Function('s', 'p', code + '\nreturn isMatch(s, p);');
        passed = problems[7].test(fn as any);
      } else if (problemIdx === 8) {
        fn = new Function('lists', code + '\nreturn mergeKLists(lists);');
        passed = problems[8].test(fn as any);
      } else if (problemIdx === 9) {
        fn = new Function('s', code + '\nreturn longestValidParentheses(s);');
        passed = problems[9].test(fn as any);
      }
      setStatus(passed ? 'success' : 'fail');
      setOutput(passed ? '✅ Correct!' : '❌ Incorrect. Try again!');
    } catch (e: any) {
      setStatus('fail');
      setOutput('Error: ' + e.message);
    }
  }

  function handleProblemChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const idx = Number(e.target.value);
    setProblemIdx(idx);
    setCode(problems[idx].starterCode);
    setOutput('');
    setStatus('idle');
    setShowSolution(false);
  }

  return (
    <PageLayout filePath="src/app/game/page.tsx">
      <div className="flex flex-col gap-8 p-2 w-full">
      <h2 className="text-2xl font-semibold mb-2 sm:mb-4 text-[#C678DD]">time to grind</h2>
        {/* Problem Selector */}
        <div className="mb-2 flex flex-wrap items-center gap-4">
          <label htmlFor="problem-select" className="text-[#cccccc] font-semibold">Choose a problem:</label>
          <select
            id="problem-select"
            value={problemIdx}
            onChange={handleProblemChange}
            className="bg-[#252526] text-[#cccccc] border border-[#3e3e42] rounded px-3 py-2"
          >
            {problems.map((p, idx) => (
              <option key={idx} value={idx}>{p.title}</option>
            ))}
          </select>
          <button
            onClick={() => handleProblemChange({ target: { value: ((problemIdx + 1) % problems.length).toString() } } as any)}
            className="bg-[#264f78] text-[#cccccc] px-4 py-2 rounded hover:bg-[#365373] transition-colors"
          >
            Next Question
          </button>
        </div>
        {/* Problem Description */}
        <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42] w-full">
          <h2 className="text-xl font-semibold text-[#C678DD] mb-2">{problems[problemIdx].title}</h2>
          <p className="text-[#cccccc] mb-4 whitespace-pre-line">{problems[problemIdx].description}</p>
          <div className="bg-[#1e1e1e] p-4 rounded mb-2 text-[#cccccc] text-sm">
            <strong>Example:</strong> <br />
            <span className="whitespace-pre-line">{problems[problemIdx].example}</span>
          </div>
        </div>
        {/* Code Editor */}
        <div className="flex flex-col w-full">
          <textarea
            value={code}
            onChange={e => setCode(e.target.value)}
            className="bg-[#1e1e1e] text-[#cccccc] p-4 rounded font-mono text-sm border border-[#3e3e42] mb-4 min-h-[200px] w-full"
            spellCheck={false}
          />
          <div className="flex gap-4 mb-2">
            <button
              onClick={runCode}
              className="bg-[#264f78] text-[#cccccc] px-4 py-2 rounded hover:bg-[#365373] transition-colors"
            >
              Run
            </button>
            <button
              onClick={() => setShowSolution(s => !s)}
              className="bg-[#37373d] text-[#cccccc] px-4 py-2 rounded hover:bg-[#505050] transition-colors"
            >
              {showSolution ? 'Hide Solution' : 'Show Solution'}
            </button>
          </div>
          <div className={`p-4 rounded text-sm mb-2 ${status === 'success' ? 'bg-[#2d4f2d] text-[#98C379]' : status === 'fail' ? 'bg-[#4f2d2d] text-[#E06C75]' : 'bg-[#252526] text-[#cccccc]'}`}>{output}</div>
          {showSolution && (
            <pre className="bg-[#23272e] text-[#cccccc] p-4 rounded font-mono text-sm border border-[#3e3e42] whitespace-pre-wrap mt-2">{problems[problemIdx].solution}</pre>
          )}
        </div>
      </div>
    </PageLayout>
  );
} 