// Question Set
const questions = [
  {
    question_ac_two: "If $A\\setminus B = \\varnothing$, then we must have ...",
    options: {
      A: "$A = \\varnothing$",
      B: "$B\\neq \\varnothing$",
      C: "$A\\subseteq B$",
      D: "$B \\subseteq A$"
    },
    answer: "C"
  },
  {
    question_ac_two: "Find the WRONG expression.",
    options: {
      A: "$\\varnothing \\subseteq \\varnothing$",
      B: "$\\varnothing \\in \\varnothing$",
      C: "$\\varnothing \\subseteq \\{\\varnothing\\}$",
      D: "$\\varnothing \\in \\{\\varnothing\\}$"
    },
    answer: "B"
  },
  {
    question_ac_two: "Let $X = \\{x\\}$. What is $\\mathcal{P}(\\mathcal{P}(X))$?",
    options: {
      A: "$\\{\\varnothing,\\{\\varnothing, \\{x\\}\\}\\}$",
      B: "$\\{\\varnothing, \\{\\varnothing\\}, \\{x\\}, \\{\\varnothing, x\\}\\}$",
      C: "$\\{\\varnothing, \\{\\varnothing\\}, \\{\\{x\\}\\}, \\{\\varnothing, \\{x\\}\\}\\}$",
      D: "$\\{\\varnothing, \\{x\\}, \\{\\{x\\}\\}, \\{\\varnothing, \\{x\\}\\}\\}$"
    },
    answer: "C"
  },
  {
    question_ac_two: "True or False: For every set $A$, we have $A\\subseteq \\mathcal{P}(A)$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "B"
  },
  {
    question_ac_two: "Let $X = \\{\\varnothing, x,y,\\{x,y\\}\\}$. What is $X \\setminus \\{x,y\\}$?",
    options: {
      A: "$\\{\\varnothing,\\{x,y\\}\\}$",
      B: "$\\{\\varnothing\\}$",
      C: "$\\{\\varnothing, x,y\\}$",
      D: "$\\{\\{x,y\\}\\}\\}$"
    },
    answer: "A"
  },
  {
    question_ac_two: "Let $X = \\{\\varnothing, x,y,\\{x,y\\}\\}$. What is $\\{\\{x,y\\}\\}\\setminus X$?",
    options: {
      A: "$\\{\\sim\\varnothing, \\sim x, \\sim y\\}$",
      B: "$\\{x,y\\}$",
      C: "$\\{\\varnothing\\}$",
      D: "$\\varnothing$"
    },
    answer: "D"
  },
  {
    question_ac_two: "Let $X = \\{\\varnothing, x,y,\\{x,y\\}\\}$. What is $X\\setminus \\varnothing$?",
    options: {
      A: "$\\{\\varnothing, x,y,\\{x,y\\}\\}$",
      B: "$\\{ x,y,\\{x,y\\}\\}$",
      C: "$\\{x,y\\}$",
      D: "$\\varnothing$"
    },
    answer: "A"
  },
  {
    question_ac_two: "True or False: There exist two sets $X$ and $Y$ such that $X\\in Y$ and $X\\subseteq Y$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "Let $X$ be a set of $3$ elements. The total number of equivalence relations on $X$ is ...",
    options: {
      A: "$1$",
      B: "$3$",
      C: "$5$",
      D: "$7$"
    },
    answer: "C"
  },
  {
    question_ac_two: "The usual strict order $<$ on $\\mathbb{Z}$ is ...",
    options: {
      A: "reflexive, antisymmetric and transitive",
      B: "not reflexive, not antisymmetric and transitive",
      C: "not reflexive, not antisymmetric and intransitive",
      D: "not reflexive, antisymmetric and transitive"
    },
    answer: "D"
  },
  {
    question_ac_two: "Let $X$ be a subset. Find the collection $\\mathcal{X}$ of subsets of $X$ which DOES NOT satisfy if $A\\in \\mathcal{X}$, then $A^\\complement\\in\\mathcal{X}$.",
    options: {
      A: "$\\mathcal{P}(X)$",
      B: "$\\{\\varnothing, X\\}$",
      C: "$\\varnothing$",
      D: "$\\{X\\}$"
    },
    answer: "D"
  },
  {
    question_ac_two: "Which of the following reflexive and transitive relation $R$ on a set $A$ DOES NOT satisfy the following property: for any $a,b\\in A$, there exists $c\\in A$ such that $aRc$ and $bRc$.",
    options: {
      A: "$A = \\mathbb{N}$ and $aRb$ iff $a\\leq b$.",
      B: "$A = \\mathbb{N}$ and $aRb$ iff $a\\mid b$.",
      C: "$A = \\mathbb{R}^*$ and $aRb$ iff $|a|\\geq |b|$.",
      D: "$A$ is the set of all nonempty bounded open intervals in $\\mathbb{R}$, and $I_1 R I_2$ iff $I_2 \\subseteq I_1$."
    },
    answer: "D"
  },
  {
    question_ac_two: "Choose the INCORRECT statement.",
    options: {
      A: "$x\\in \\{x\\}\\setminus\\{\\{x\\}\\}$",
      B: "$\\{x\\}\\subseteq \\{x\\}\\setminus\\{\\{x\\}\\}$",
      C: "$x\\in \\{x\\}\\cup x$",
      D: "$\\{x\\}\\subseteq \\{x\\}\\cup x$",
      E: "None of the above."
    },
    answer: "E"
  },
  {
    question_ac_two: "Let $f:\\mathbb{Z}\\to\\mathbb{Z}$ be defined by $f(x) = |x| - kx$ where $k\\geq 2$ is a fixed integer. Then",
    options: {
      A: "$f$ is injective but not surjective",
      B: "$f$ is surjective but not injective",
      C: "$f$ is bijective",
      D: "$f$ is neither injective nor surjective"
    },
    answer: "A"
  },
  {
    question_ac_two: "It is illegal to assume $f([a, b]) = [f(a), f(b)]$. However, under what condition is this actually correct?",
    options: {
      A: "It is true when $f$ is a continuous function.",
      B: "It is true when $0 \\notin [a, b]$.",
      C: "It is true when $f$ is strictly increasing on $[a, b]$.",
      D: "It is true when $f$ is a differentiable function."
    },
    answer: "C"
  },
  {
    question_ac_two: "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be defined by $f(x) = x^2$. What is $f^{-1}([4, 9])$?",
    options: {
      A: "Undefined",
      B: "$[2, 3]$",
      C: "$[16, 81]$",
      D: "$[-3, -2] \\cup [2, 3]$"
    },
    answer: "D"
  },
  {
    question_ac_two: "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be defined by $f(x) = x^2 + 1$. What is $f^{-1}([-5, 0])$?",
    options: {
      A: "$\\varnothing$",
      B: "Undefined",
      C: "$[-\\sqrt{5}, 0]$",
      D: "$\\{0\\}$"
    },
    answer: "A"
  },
  {
    question_ac_two: "Let $A$ and $B$ be sets. Which of the following properties is not always correct?",
    options: {
      A: "$f^{-1}(A \\cup B) = f^{-1}(A) \\cup f^{-1}(B)$",
      B: "$f^{-1}(A \\cap B) = f^{-1}(A) \\cap f^{-1}(B)$",
      C: "If $A \\subseteq B$, then $f^{-1}(A) \\subseteq f^{-1}(B)$",
      D: "$f(f^{-1}(A)) = A$",
      E: "$f^{-1}(A^\\complement) = f^{-1}(A)^\\complement$"
    },
    answer: "D"
  },
  {
    question_ac_two: "Let $f: A \\to B$ and $g: B \\to C$. If the composite function $g \\circ f$ is surjective, which of the following is always true?",
    options: {
      A: "Both $f$ and $g$ must be surjective.",
      B: "$f$ must be surjective, and $g$ might not be.",
      C: "$g$ must be surjective, and $f$ might not be.",
      D: "Both $f$ and $g$ are not required to be surjective."
    },
    answer: "C"
  },
  {
    question_ac_two: "Let $f: A \\to B$ and $g: B \\to C$. If the composite function $g \\circ f$ is injective, which of the following is always true?",
    options: {
      A: "Both $f$ and $g$ must be injective.",
      B: "$f$ must be injective, and $g$ might not be.",
      C: "$g$ must be injective, and $f$ might not be.",
      D: "Both $f$ and $g$ are not required to be injective."
    },
    answer: "B"
  },
  {
    question_ac_two: "Suppose we have functions $f_1, f_2: B \\to C$ and a function $g: A \\to B$ such that $f_1 \\circ g = f_2 \\circ g$. To obtain $f_1 = f_2$, what is the most important property we must have?",
    options: {
      A: "$g$ must be injective.",
      B: "$g$ must be surjective.",
      C: "$g$ must be bijective.",
      D: "$f_1$ and $f_2$ must be injective."
    },
    answer: "B"
  },
  {
    question_ac_two: "We can find a bijection from $[0, 1]$ to $]0, 1]$ by shifting the elements of a countable subset $S=\\{x_1,x_2,\\dots\\}$ (mapping $x_{i} \\mapsto x_{i+1}$) and keeping all elements $x \\notin S$ fixed. Which of the following is not a valid choice?",
    options: {
      A: "$S=\\{1,1/2,1/3,1/4,\\dots\\}$",
      B: "$S = \\{0,0.1,0.01,0.001,0.0001,\\dots\\}$",
      C: "$S = \\mathbb{Q}\\cap [0,1]$",
      D: "$S = \\{0,1/50,1/100,1/3000\\} \\cup\\{1/n : n\\in\\mathbb{N}\\text{ and }n\\geq 3143\\}$"
    },
    answer: "A"
  },
  {
    question_ac_two: "Let $A$ and $B$ be finite sets. Choose the INCORRECT statement.",
    options: {
      A: "$\\mathcal{P}(A) = 2^{|A|}$",
      B: "$|A\\setminus B| = |A| - |B|$",
      C: "The number of functions from $A$ to $B$ is $\\left|\\prod_{i=1}^{|A|}B\\right|$",
      D: "$|A| + |B| = |A\\cup B| + |A\\cap B|$",
      E: "None of the above."
    },
    answer: "B"
  },
  {
    question_ac_two: "Choose the WRONG inequality.",
    options: {
      A: "$a+c < b+d$ where $a < b$ and $c\\leq d$",
      B: "$a^2\\leq ab < b^2$ where $0\\leq a < b$",
      C: "$a < \\frac{a+b}{2} < b$ where $a < b$",
      D: "$0\\leq ac\\leq bd$ where $a < b$ and $0\\leq c\\leq d$",
      E: "None of the above."
    },
    answer: "D"
  },
  {
    question_ac_two: "Choose the WRONG inequality.",
    options: {
      A: "$|a-b|\\leq |a-c| + |c-b|$ for all $a,b,c\\in\\mathbb{R}$.",
      B: "$|\\sin nx|\\leq n|\\sin x|$ for $n,x\\in\\mathbb{R}$.",
      C: "$(1+x)^n \\geq 1+nx$ for all $n\\in\\mathbb{N}$, $x\\geq -1$.",
      D: "$||a|-|b|| \\leq |a-b|$ for all $a,b\\in\\mathbb{R}$.",
      E: "None of the above."
    },
    answer: "B"
  },
  {
    question_ac_two: "Choose the INCORRECT statement.",
    options: {
      A: "The sum of two rational numbers is a rational number.",
      B: "The sum of two irrational numbers is an irrational number.",
      C: "The sum of a rational number and an irrational number is an irrational number.",
      D: "The product of two rational numbers is a rational number.",
      E: "None of the above."
    },
    answer: "B"
  },
  {
    question_ac_two: "Let $A = [0,\\pi)\\cap \\mathbb{Q}^\\complement$. Which justification best explains $\\inf_{a\\in A} \\sin(a) = 0$?",
    options: {
      A: "The infimum is $0$ because we can construct an appropriate set thanks to the supremum property of $\\mathbb{R}$.",
      B: "The infimum is $0$ because we can take $\\sin(\\pi) = 0$ thanks to the fact that the sine function is continuous.",
      C: "The infimum is $0$ because we have an irrational number that is very close to $0$ thanks to the Archimedean property.",
      D: "The infimum is $0$ because we can choose a sequence of irrational numbers converging to $0$ thanks to the density of irrational numbers."
    },
    answer: "D"
  },
  {
    question_ac_two: "Consider the set $A = \\{ \\cos x : x \\in [0, \\pi] \\}$. We evaluate the function at the endpoints, finding $\\cos(0) = 1$ and $\\cos(\\pi) = -1$. Then we conclude that $\\sup A = 1$ and $\\inf A = -1$. Which of the following reasons is WRONG?",
    options: {
      A: "Because the cosine function is strictly decreasing on the interval $[0, \\pi]$.",
      B: "Because the derivative $f'(x) = -\\sin(x)$ is nonzero on the open interval $(0, \\pi)$, indicating there are no interior critical points.",
      C: "Because the function is concave down on the entire interval.",
      D: "Because the global maximum and global minimum of the cosine function are both attained within this interval."
    },
    answer: "C"
  },
  {
    question_ac_two: "Your boyfriend/girlfriend claims that if a set has a supremum, it must have a maximum. You decide to reply with a counterexample instead of saving the relationship. Which do you reply?",
    options: {
      A: "$\\{1, 2, 3\\}$",
      B: "$(0, 5]$",
      C: "$\\mathbb{Z}$",
      D: "$\\{-\\frac{1}{n} : n \\in \\mathbb{N} \\}$",
      E: "$\\{\\text{supremum}\\}$",
      F: "The set of your patience",
      G: "\"You told me you will be ready in $5$ minutes, but you never being ready\""
    },
    answer: "D"
  },
  {
    question_ac_two: "Consider the set $A = \\{x \\in \\mathbb{Q} : x^2 < 2\\}$. Why does the supremum property of $\\mathbb{R}$ NOT guarantee a supremum for $A$ in $\\mathbb{Q}$?",
    options: {
      A: "The set $A$ is not bounded above.",
      B: "The set $A$ is empty.",
      C: "The supremum property only guarantees a least upper bound exists in $\\mathbb{R}$.",
      D: "The supremum property only works in $\\mathbb{R}$, but now we are considering a subset of $\\mathbb{Q}$."
    },
    answer: "C"
  },
  {
    question_ac_two: "If $\\inf X = \\sup X$ for a nonempty bounded set $X$, what can we say about the set $X$?",
    options: {
      A: "$X$ is the empty set.",
      B: "$X$ is a singleton.",
      C: "$X=(x, x)$ for some $x\\in\\mathbb{R}$.",
      D: "This is impossible."
    },
    answer: "B"
  },
  {
    question_ac_two: "True or False: If a nonempty subset of integers $A \\subseteq \\mathbb{Z}$ is bounded above, then $\\sup A \\in A$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "True or False: If $A$ is a nonempty set which is bounded above, and $\\sup A \\notin A$, then $A$ must contain infinitely many elements.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "True or False: Since $\\varnothing$ is a subset of $\\mathbb{R}$ and is bounded above by any real number, it follows that $\\sup \\varnothing = 0$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "B"
  },
  {
    question_ac_two: "Which of the following constructions is sufficient to prove that a set $A$ is countable?",
    options: {
      A: "Constructing a surjective function $f: A \\to \\mathbb{N}$.",
      B: "Constructing a bijective function $f: A \\to \\prod_{i=1}^\\infty \\mathbb{N}$.",
      C: "Constructing an injective function $f: \\mathbb{N} \\to A$.",
      D: "Constructing an injective function $f: A \\to \\mathbb{N}$."
    },
    answer: "D"
  },
  {
    question_ac_two: "Let $I$ be an index set. We want to conclude that the union $\\bigcup_{i \\in I} A_i$ is countable. Which condition is NOT necessary?",
    options: {
      A: "$I$ must be countable.",
      B: "$A_i$ must be countable for each $i\\in I$.",
      C: "The sets $A_i$ must be pairwise disjoint.",
      D: "The union must be taken over a countable collection of sets."
    },
    answer: "C"
  },
  {
    question_ac_two: "For every $x \\in \\mathbb{R}$, we define $A_x = \\{x-1,x,x+1\\}$. Note that every $A_x$ is a finite set. Is $\\bigcup_{x \\in \\mathbb{R}} A_x$ countable?",
    options: {
      A: "Yes, because it is a union of countable sets.",
      B: "Yes, because each $A_x$ is finite.",
      C: "No, because the index set is uncountable.",
      D: "No, because finite sets cannot be combined to form an infinite set."
    },
    answer: "C"
  },
  {
    question_ac_two: "In showing $\\mathbb{N}\\times \\mathbb{N}$ is countable, we define the function $f(m, n) = 2^m 3^n$. Which theorem guarantees that this function is injective?",
    options: {
      A: "The Fundamental Theorem of Arithmetic",
      B: "The Archimedean Property",
      C: "Euclidean Algorithm",
      D: "The Fundamental Theorem of Algebra"
    },
    answer: "A"
  },
  {
    question_ac_two: "In showing $\\mathbb{Q}$ is countable, the prof used \"chain of mappings\" strategy: $\\mathbb{Q} \\to \\mathbb{Z} \\times \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{N} \\to \\mathbb{N}$. Which one best explain the tools to get the conclusion?",
    options: {
      A: "Union of injections is an injection.",
      B: "Composite of injections is an injection.",
      C: "Union of surjections is a surjection.",
      D: "Composite of surjections is a surjection."
    },
    answer: "B"
  },
  {
    question_ac_two: "If we adapt the logic from showing $\\mathbb{N}\\times \\mathbb{N}$ is countable, which function would be the most logical to show $\\mathbb{N} \\times \\mathbb{N} \\times \\mathbb{N}\\times \\mathbb{N}\\times \\mathbb{N}$ is countable?",
    options: {
      A: "$f(a, b, c,d,e) = 2^a 3^b 4^c 5^d 6^e$",
      B: "$f(a, b, c,d,e) = 2^{a}3^{c} + 2^c3^d+2^e$",
      C: "$f(a, b, c,d,e) = 2^a 3^b 5^c 7^d 9^e$",
      D: "$f(a, b, c,d,e) = 2^a 3^b 5^c 7^d 11^e$",
      E: "This approach would fail to work."
    },
    answer: "D"
  },
  {
    question_ac_two: "Let $X = \\{1, 2, 3\\}$. Define a function $\\varphi:X\\to\\mathcal{P}(X)$ by $\\varphi(1) = \\{1, 2\\}$, $\\varphi(2) = \\{1, 3\\}$, $\\varphi(3) = \\{3\\}$. What is $\\{ x \\in X : x \\notin \\varphi(x) \\}$?",
    options: {
      A: "$\\{2\\}$",
      B: "$\\{1, 3\\}$",
      C: "$\\{1, 2, 3\\}$",
      D: "$\\varnothing$"
    },
    answer: "A"
  },
  {
    question_ac_two: "Which of the following best explains why we have $S := \\{ x \\in X : x \\notin \\varphi(x) \\} \\in \\mathcal{P}(X)$?",
    options: {
      A: "Because $S$ is nonempty.",
      B: "Because $S$ is constructed by collecting elements from $X$.",
      C: "Because $\\varphi$ is surjective.",
      D: "Because $S$ contains elements which are not in their own image."
    },
    answer: "B"
  },
  {
    question_ac_two: "True or False: There exists an injection from a set $X$ to its power set $\\mathcal{P}(X)$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "True or False: If a set $X$ is countable, then $\\mathcal{P}(X)$ must be uncountable.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "B"
  },
  {
    question_ac_two: "True or False: The collection of all finite subsets of $\\mathbb{N}$ is countable.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "The proof that there is no surjection $\\varphi:X\\to \\mathcal{P}(X)$ relies on the construction $S = \\{ x \\in X : x \\notin \\varphi(x) \\}$. Which one best describes the motivation behind choosing the condition $x \\notin \\varphi(x)$?",
    options: {
      A: "To use the Pigeonhole Principle, arguing that there are more subsets than elements",
      B: "To use the Cantor Pairing Argument, ensuring that subsets cannot be exhausted in pairing with elements.",
      C: "To use Diagonal Argument that mimicks the argument in Russell's Paradox.",
      D: "To use Schröder-Bernstein Theorem, ensuring that the cardinality of $X$ is strictly less than that of $\\mathcal{P}(X)$.",
      E: "Because the prof and all the textbooks say so."
    },
    answer: "C"
  },
  {
    question_ac_two: "Which of the following is a consequence of the Archimedean Property on $\\mathbb{N}$?",
    options: {
      A: "$\\mathbb{N}$ is an infinite set.",
      B: "$\\mathbb{N}$ is not bounded above in $\\mathbb{R}$.",
      C: "$\\mathbb{N}$ is dense in $\\mathbb{R}$.",
      D: "$\\mathbb{N}$ is not a totally ordered field."
    },
    answer: "B"
  },
  {
    question_ac_two: "In Example 3.3 we are given $\\{\\frac{1}{n} - \\frac{1}{m^2}:n,m\\in\\mathbb{N}\\}$. Which of the following correctly describes the strategy to prove that $\\sup A = 1$?",
    options: {
      A: "Show that for any $\\varepsilon > 0$, there exists an element $a \\in A$ such that $a > 1 - \\varepsilon$.",
      B: "Show the set is bounded by finding a number $M$ such that $x \\le M$ for all $x \\in A$. Then show that for any $\\varepsilon > 0$, there exists an element $a \\in A$ such that $a > M - \\varepsilon$. Finally, show that $M=1$.",
      C: "Show that $1$ is an upper bound for $A$. Then find natural numbers $n, m$ such that $\\frac{1}{n} - \\frac{1}{m^2} = 1$.",
      D: "Show that $1$ is an upper bound for $A$. Then show that for any $\\varepsilon > 0$, there exists an element $a \\in A$ such that $a > 1 - \\varepsilon$."
    },
    answer: "D"
  },
  {
    question_ac_two: "Consider the set $S = \\{\\frac{2n}{3n+1}:n\\in\\mathbb{Z}\\}$. If we want to determine the supremum and infimum, which strategy is the most valid approach?",
    options: {
      A: "Calculate the limit as $n \\to \\infty$ and $n \\to -\\infty$. The larger limit is the supremum, and the smaller limit is the Infimum.",
      B: "Treat the expression as a continuous function $f(x)$. Calculate the derivative $f'(x)$ to check for critical points. The supremum and infinimum occur either at critical points or limits at $\\pm \\infty$.",
      C: "Split $\\mathbb{Z}$ into few cases. Evaluate specific integers closest to the singularity. Then do the inequality analysis.",
      D: "List the first few positive / negative terms to find the pattern. The supremum / infimum is the limit the positive / negative sequence approaches."
    },
    answer: "C"
  },
  {
    question_ac_two: "Consider the set $S = \\left\\{ (-1)^n \\left(  \\frac{11n-7}{n} \\right) : n \\in \\mathbb{N} \\right\\}$. If we want to determine the supremum and infimum, which strategy is the most valid approach?",
    options: {
      A: "Partition the domain $\\mathbb{N}$ into even integers and odd integers cases. For each case, check monotonicity and find the limit. Then compare the results of the two cases to identify supremum and infimum.",
      B: "Ignore the $(-1)^n$ first. Find the supremum of $T=\\{\\frac{11n-7}{n}:n\\in\\mathbb{N}\\}$. Then $\\sup S = \\sup T$ and $\\inf S = -\\sup T$.",
      C: "Find the limit $\\ell$ of $(\\frac{11n-7}{n})_{n\\in\\mathbb{N}}$ the sequence as  $n \\to \\infty$. Since the term oscillates between values close to $\\ell$ and $-\\ell$, we can conclude that $\\sup S = \\ell$ and $\\inf S = -\\ell$.",
      D: "Calculate the first two thousand terms of the sequence. Identify the largest and smallest values among these specific calculations and then conclude the supremum and infimum."
    },
    answer: "A"
  },
  {
    question_ac_two: "Consider the set $S = \\left\\{ \\frac{x}{x^2+1} : x \\in \\mathbb{R} \\right\\}$. If we want to determine the supremum and infimum, which strategy is the most valid approach?",
    options: {
      A: "Find the limits $\\ell_1$ as $x \\to +\\infty$ and $\\ell_2$ as $x \\to -\\infty$. Then $\\sup S = \\max\\{\\ell_1,\\ell_2\\}$ and $\\inf S = \\min\\{\\ell_1,\\ell_2\\}$.",
      B: "Since the numerator $x$ is unbounded, the set $S$ is also unbounded. Therefore, $\\sup(S) = +\\infty$ and $\\inf(S) = -\\infty$.",
      C: "Treat the expression as a continuous function $f(x)$. Calculate the derivative $f'(x)$ to check for critical points. The supremum and infinimum occur either at critical points or limits at $\\pm \\infty$.",
      D: "Use ChatGPT, paste the problem and ask for the supremum and infimum. The answers can be found after few seconds."
    },
    answer: "C"
  },
  {
    question_ac_two: "Consider the set $S = \\bigcup_{n=1}^{\\infty} \\left[ \\frac{1}{n}, 2 - \\frac{1}{n} \\right]$. If we want to determine the supremum and infimum, which strategy is the most valid approach?",
    options: {
      A: "List the first few intervals to find the pattern.",
      B: "Find the limits at endpoints and use the definition of union to simplify the expression into an interval.",
      C: "Look for the interval with the smallest / largest lower bound to obtain supremum and infimum.",
      D: "Call 999."
    },
    answer: "B"
  },
  {
    question_ac_two: "Let $A$ and $B$ be nonempty subsets of $\\mathbb{R}$ which are bounded above. Define $A - B = \\{ a - b : a \\in A, b \\in B \\}$. What is $\\sup(A - B)$?",
    options: {
      A: "$\\sup(A) - \\sup(B)$",
      B: "$\\inf(A) - \\sup(B)$",
      C: "$\\sup(A) + \\inf(B)$",
      D: "$\\sup(A) - \\inf(B)$"
    },
    answer: "D"
  },
  {
    question_ac_two: "Let $S = [2, 5]$. What is $\\sup(-3 S)$?",
    options: {
      A: "$-15$",
      B: "$-6$",
      C: "$15$",
      D: "$6$"
    },
    answer: "B"
  },
  {
    question_ac_two: "True or False: Every upper bounded subset of $\\mathbb{R}$ has a least upper bound.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "B"
  },
  {
    question_ac_two: "True or False: If $u$ is an upper bound of a set $A$, then for $\\varepsilon>0$, $u-\\varepsilon$ is not an upper bound for $A$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "B"
  },
  {
    question_ac_two: "True or False: For nonempty bounded subsets $A,B$ of $\\mathbb{R}$, we have $\\sup(A \\cup B) = \\max( \\sup(A), \\sup(B) )$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "To prove that if $x \\ge y - \\varepsilon$ for all $\\varepsilon > 0$, then $x \\ge y$, we try contradiction and assume that $x < y$. Which choice of $\\varepsilon$ leads to a contradiction?",
    options: {
      A: "$\\epsilon = 1$",
      B: "$\\epsilon = y - x$",
      C: "$\\epsilon = \\frac{y - x}{2}$",
      D: "$\\epsilon = x - y$"
    },
    answer: "C"
  },
  {
    question_ac_two: "Consider $S = \\{ \\frac{n}{m} : n, m \\in \\mathbb{N} \\text{ and } n < m \\}$. Which of the following is correct?",
    options: {
      A: "$\\sup(S) = 1$, $\\inf(S) = 0$, $\\max(S) = 1$, $\\min(S) = 0$",
      B: "$\\sup(S) = 1$, $\\inf(S) = 1/2$, $\\max(S) = \\text{DNE}$, $\\min(S) = 1/2$",
      C: "$\\sup(S) = \\text{DNE}$, $\\inf(S) = \\text{DNE}$, $\\max(S) = \\text{DNE}$, $\\min(S) = \\text{DNE}$",
      D: "$\\sup(S) = 1$, $\\inf(S) = 0$, $\\max(S) = \\text{DNE}$, $\\min(S) = \\text{DNE}$"
    },
    answer: "D"
  },
  {
    question_ac_two: "Consider $S = \\left\\{ \\arctan\\left( \\frac{n+m}{1-nm} \\right) : n, m \\in \\mathbb{N} \\text{ and } nm \\neq 1 \\right\\}$. Which of the following is correct?",
    options: {
      A: "$\\sup(S) = \\pi/2$, $\\inf(S) = -\\pi/2$, $\\max(S) = \\text{DNE}$, $\\min(S) = \\text{DNE}$",
      B: "$\\sup(S) = 0$, $\\inf(S) = -\\arctan 3$, $\\max(S) = \\text{DNE}$, $\\min(S) = -\\arctan 3$",
      C: "$\\sup(S) = \\pi$, $\\inf(S) = \\frac{\\pi}{4} + \\arctan 2$, $\\max(S) = \\text{DNE}$, $\\min(S) = \\frac{\\pi}{4} + \\arctan 2$",
      D: "$\\sup(S) = \\arctan 3$, $\\inf(S) = 0$, $\\max(S) = \\arctan 3$, $\\min(S) = \\text{DNE}$"
    },
    answer: "B"
  },
  {
    question_ac_two: "Let $X\\subseteq \\mathbb{R}$ be a bounded set of positive real numbers with $\\inf X=0$ and let $Y = \\{\\frac{1}{x}:x\\in X\\}$. Which of the following is correct?",
    options: {
      A: "$\\sup(Y) = \\text{DNE}$, $\\inf(Y) = 1/\\sup(X)$, $\\max(Y) =  \\text{DNE}$, $\\min(Y) =  \\text{No conclusion}$",
      B: "$\\sup(Y) = \\text{DNE}$, $\\inf(Y) = 1/\\sup(X)$, $\\max(Y) =  \\text{DNE}$, $\\min(Y) =  \\text{DNE}$",
      C: "$\\sup(Y) = 0$, $\\inf(Y) = 1/\\sup(X)$, $\\max(Y) =  \\text{DNE}$, $\\min(Y) =  \\text{No conclusion}$",
      D: "$\\sup(Y) = 0$, $\\inf(Y) = 1/\\sup(X)$, $\\max(Y) =  0$, $\\min(Y) =  \\text{DNE}$"
    },
    answer: "A"
  },
  {
    question_ac_two: "Let $A\\subseteq B$. Which of the following is NOT always true?",
    options: {
      A: "$\\mathring{A} \\subseteq \\mathring{B}$",
      B: "$\\overline{A} \\subseteq \\overline{B}$",
      C: "$\\partial A \\subseteq \\partial B$",
      D: "$A'\\subseteq B'$"
    },
    answer: "C"
  },
  {
    question_ac_two: "Consider $\\mathbb{Q}\\subseteq \\mathbb{R}$. Which of the following has the correct answer and justification?",
    options: {
      A: "$\\partial \\mathbb{Q} \\subseteq \\partial \\mathbb{R}$ because $\\mathbb{Q}$ is smaller than $\\mathbb{R}$.",
      B: "$\\partial \\mathbb{Q} = \\partial \\mathbb{R}$ because $\\mathbb{Q}$ is dense in $\\mathbb{R}$.",
      C: "$\\partial \\mathbb{R} \\subsetneq \\partial \\mathbb{Q}$ because $\\partial \\mathbb{R} = \\varnothing$ and $\\partial \\mathbb{Q} = \\mathbb{R}$.",
      D: "$\\partial \\mathbb{R} \\cap \\partial \\mathbb{Q} = \\varnothing$ because neither is a subset of the other."
    },
    answer: "C"
  },
  {
    question_ac_two: "Consider the set $S = \\{ \\frac{1}{n} : n \\in \\mathbb{N} \\}$. Choose the correct statement:",
    options: {
      A: "Open and closed",
      B: "Open but not closed",
      C: "Closed but not open",
      D: "Neither open nor closed"
    },
    answer: "D"
  },
  {
    question_ac_two: "Consider the set $S = \\bigcup_{n=1}^{\\infty} \\left[ \\frac{1}{n}, 1 - \\frac{1}{n} \\right]$. Choose the correct statement:",
    options: {
      A: "Open and closed",
      B: "Open but not closed",
      C: "Closed but not open",
      D: "Neither open nor closed"
    },
    answer: "B"
  },
  {
    question_ac_two: "Consider the set $S = \\bigcap_{n=1}^{\\infty} \\left] -\\frac{1}{n}, \\frac{1}{n} \\right[$. Choose the correct statement:",
    options: {
      A: "Open and closed",
      B: "Open but not closed",
      C: "Closed but not open",
      D: "Neither open nor closed"
    },
    answer: "C"
  },
  {
    question_ac_two: "Consider the set $S =  \\{ x \\in \\mathbb{R} : |x+1| > |x-1| \\}$. Choose the correct statement:",
    options: {
      A: "Open and closed",
      B: "Open but not closed",
      C: "Closed but not open",
      D: "Neither open nor closed"
    },
    answer: "B"
  },
  {
    question_ac_two: "Consider the set $S = \\{ x\\in\\mathbb{R}: x\\neq\\frac{1}{n}\\text{ for all }n\\in\\mathbb{N} \\}$. Choose the correct statement:",
    options: {
      A: "Open and closed",
      B: "Open but not closed",
      C: "Closed but not open",
      D: "Neither open nor closed"
    },
    answer: "D"
  },
  {
    question_ac_two: "What is $\\partial(\\partial(\\mathbb{Q}))$?",
    options: {
      A: "$\\mathbb{R}$",
      B: "$\\mathbb{Q}$",
      C: "$\\varnothing$",
      D: "$\\mathbb{R}\\setminus \\mathbb{Q}$"
    },
    answer: "C"
  },
  {
    question_ac_two: "Your husband/waifu insists that the boundary of a set is always \"thin\", and hence must have empty interior. You decide give a counterexample instead of saving the marriage. Which do you reply?",
    options: {
      A: "$[0, 1]$",
      B: "$[0, 1] \\cup (2, 3)$",
      C: "$[0, 1] \\cap \\mathbb{Q}$",
      D: "$\\{ \\frac{1}{n} : n \\in \\mathbb{N} \\}$",
      E: "\"Your skin has fat oil\""
    },
    answer: "C"
  },
  {
    question_ac_two: "Let $A = (0, 1) \\cup (1, 2)$. What is $\\mathring{\\overline{A}}$?",
    options: {
      A: "$(0, 1) \\cup (1, 2)$",
      B: "$[0, 2]$",
      C: "$(0, 2)$",
      D: "$\\{1\\}$"
    },
    answer: "C"
  },
  {
    question_ac_two: "Let $A\\subseteq \\mathbb{R}$. Which of the following is NOT always true?",
    options: {
      A: "$\\overline{\\overline{A}} = \\overline{A}$",
      B: "$\\mathring{\\mathring{A}} = \\mathring{A}$",
      C: "$\\partial(\\partial A) = \\partial A$",
      D: "$\\mathring{A}\\subseteq \\mathring{\\overline{A}}$"
    },
    answer: "C"
  },
  {
    question_ac_two: "Let $A\\subseteq\\mathbb{R}$ be such that $\\overline{A} = [0,5]$ and $\\mathring{A} = (0,2)\\cup (3,5)$. What is $\\partial A$?",
    options: {
      A: "$\\{0, 2, 3, 5\\}$",
      B: "$\\{0, 5\\}$",
      C: "$[0, 5]$",
      D: "$\\{0, 5\\} \\cup [2, 3]$",
      E: "Undefined"
    },
    answer: "D"
  },
  {
    question_ac_two: "Let $A\\subseteq\\mathbb{R}$ be such that $\\mathring{A} \\neq\\varnothing$. What can we conclude about $A$?",
    options: {
      A: "$A$ must be uncountable.",
      B: "$A$ could be countable or uncountable.",
      C: "$A$ must be closed.",
      D: "$\\partial A$ must be countable."
    },
    answer: "A"
  },
  {
    question_ac_two: "True or False: For any $A\\subseteq \\mathbb{R}$, we have $\\partial(A) = \\partial(A^\\complement)$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "Let $f: \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = \\begin{cases} x & \\text{if } x \\in \\mathbb{Q}  \\\\ x + 1 & \\text{if } x \\in \\mathbb{Q}^\\complement \\end{cases}.$ What is $\\partial f((0,1))$?",
    options: {
      A: "$\\{0, 1\\}$",
      B: "$[0, 1]$",
      C: "$\\{0, 1, 2\\}$",
      D: "$[0, 2]$"
    },
    answer: "D"
  },
  {
    question_ac_two: "Let $A$ be an open set and let $B$ be a closed set. What can we tell about $A \\setminus B$?",
    options: {
      A: "It is always open.",
      B: "It is always closed.",
      C: "It is neither open nor closed.",
      D: "No conclusion."
    },
    answer: "A"
  },
  {
    question_ac_two: "True or False: Every open set is a countable union of disjoint open intervals.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "True or False: Every closed set is a countable union of disjoint closed intervals.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "B"
  },
  {
    question_ac_two: "True or False: Every closed set can be written as a countable intersection of open sets.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "True or False: Every open set can be written as a countable union of closed sets.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "True or False: Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a bijection and let $A\\subseteq \\mathbb{R}$. Then we must have $f(A') = f(A)'$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "B"
  },
  {
    question_ac_two: "Let $A\\subseteq \\mathbb{R}$ be a set such that $A'' \\not\\subseteq A'$. Which of the following is a suitable candidate for $A$?",
    options: {
      A: "$A = \\mathbb{Q}$",
      B: "$A = [0, 1]$",
      C: "$A = \\{ \\frac{1}{n} : n \\in \\mathbb{N} \\}$",
      D: "None of the above."
    },
    answer: "D"
  },
  {
    question_ac_two: "Which of the following results is NOT correct?",
    options: {
      A: "$(\\overline{\\mathbb{Q}})' = \\mathbb{R}$",
      B: "$\\overline{\\mathbb{Q}'} = \\mathbb{R}$",
      C: "$(\\overline{\\mathbb{Q}})^\\complement = \\varnothing$",
      D: "$(\\mathring{\\mathbb{Q}})' = \\mathbb{R}$"
    },
    answer: "D"
  },
  {
    question_ac_two: "Consider $S = \\left\\{ \\frac{1}{n} + \\frac{1}{m} : n, m \\in \\mathbb{N} \\right\\}$. What is $S'$?",
    options: {
      A: "$\\{0\\}$",
      B: "$\\{ \\frac{1}{k} : k \\in \\mathbb{N} \\}$",
      C: "$\\{ \\frac{1}{k} : k \\in \\mathbb{N} \\} \\cup \\{0\\}$",
      D: "$S \\cup \\{0\\}$"
    },
    answer: "C"
  },
  {
    question_ac_two: "Consider $S = \\left\\{ (-1)^n \\left( 1 + \\frac{1}{n} \\right) : n \\in \\mathbb{N} \\right\\}$. What is $S'$?",
    options: {
      A: "$\\{0\\}$",
      B: "$[-1, 1]$",
      C: "$\\varnothing$",
      D: "$\\{-1, 1\\}$"
    },
    answer: "D"
  },
  {
    question_ac_two: "Consider $S = \\mathbb{Z} \\cup \\left\\{ 1 + \\frac{1}{n} : n \\in \\mathbb{N} \\right\\} \\cup (\\mathbb{Q} \\cap (5, 6))$. What is $S'$?",
    options: {
      A: "$S' = \\mathbb{Z} \\cup [5, 6]$",
      B: "$S' = \\{1\\} \\cup [5, 6]$",
      C: "$S' = \\{1\\} \\cup (5, 6)$",
      D: "$S' = \\{1, 5, 6\\}$"
    },
    answer: "B"
  },
  {
    question_ac_two: "True or False: Let $A,B\\subseteq \\mathbb{R}$. Then we must have $(A\\cap B)' = A'\\cap B'$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "B"
  },
  {
    question_ac_two: "Which of the following sequences converges?",
    options: {
      A: "$(\\frac{n^2+1}{2n+1})_{n\\in\\mathbb{N}}$",
      B: "$(\\ln(\\frac{1}{n}))_{n\\in\\mathbb{N}}$",
      C: "$(n-\\arctan n)_{n\\in\\mathbb{N}}$",
      D: "$\\left( \\frac{1}{\\sqrt{n+1}} + \\frac{1}{\\sqrt{n+2}} + \\cdots + \\frac{1}{\\sqrt{2n}} \\right)_{n\\in\\mathbb{N}}$",
      E: "None of the above."
    },
    answer: "E"
  },
  {
    question_ac_two: "Which of the following limits is INCORRECT?",
    options: {
      A: "$\\lim_{n \\to \\infty} \\left(1 - \\frac{1}{n}\\right)^n = \\frac{1}{e}$",
      B: "$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n+1}\\right)^n = e$",
      C: "$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{2n}\\right)^n = e^2$",
      D: "$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n^2}\\right)^n = 1$",
      E: "None of the above."
    },
    answer: "C"
  },
  {
    question_ac_two: "Choose the correct statement.",
    options: {
      A: "If $(x_n)_{n\\in\\mathbb{N}}$ is a strictly increasing sequence, then $\\frac{1}{x_n} \\to 0$.",
      B: "If $(x_n)_{n\\in\\mathbb{N}}$ is an increasing sequence that is not bounded above, then $\\frac{1}{x_n} \\to 0$.",
      C: "If $(x_n)_{n\\in\\mathbb{N}}$ is a strictly increasing sequence that is not bounded above, then $\\frac{1}{x_n} \\to 0$.",
      D: "If $(x_n)_{n\\in\\mathbb{N}}$ is an increasing sequence, then $\\frac{1}{x_n} \\to 0$."
    },
    answer: "C"
  },
  {
    question_ac_two: "True or False: Every sequence has a monotonic subsequence.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "True or False: If $(a_n)_{n\\in\\mathbb{N}}$ converges to $0$ and $(b_n)_{n\\in\\mathbb{N}}$ is a sequence, then $(a_nb_n)_{n\\in\\mathbb{N}}$ converges to $0$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "B"
  },
  {
    question_ac_two: "True or False: If $(a_n)_{n\\in\\mathbb{N}}$ is convergent, then, for all $k\\in\\mathbb{N}$, $(a_{n+k})_{n\\in\\mathbb{N}}$ is convergent.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "True or False: If $(a_n)_{n\\in\\mathbb{N}}$ diverges to $+\\infty$ and $(b_n)_{n\\in\\mathbb{N}}$ is bounded, then $(a_n/b_n)_{n\\in\\mathbb{N}}$ diverges to $+\\infty$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "B"
  },
  {
    question_ac_two: "Proving the following statements are sufficient to show $(x_n)_{n\\in\\mathbb{N}}$ converges, EXCEPT",
    options: {
      A: "$\\exists\\ell \\in\\mathbb{R}$, $\\forall \\varepsilon>0$, $\\exists N\\in\\mathbb{N}$, $\\forall n$ $(n\\geq N\\Rightarrow |x_n-\\ell|\\leq \\varepsilon)$.",
      B: "$\\forall \\varepsilon>0$, $\\exists N\\in\\mathbb{N}$, $\\forall m,n$ $(m,n\\geq N\\Rightarrow |x_m-x_n|\\leq \\varepsilon)$.",
      C: "$\\exists N \\in \\mathbb{N}$, $\\forall n$ $(n \\geq N \\Rightarrow |x_{n+1} - x_n| \\leq \\frac{1}{n^2})$.",
      D: "$\\exists N \\in \\mathbb{N}$, $\\forall n$ $(n \\geq N \\Rightarrow |x_{n+1} - x_n| \\leq \\frac{1}{n})$."
    },
    answer: "D"
  },
  {
    question_ac_two: "True or False: If $(a_n)_{n\\in\\mathbb{N}}$ and $(b_n)_{n\\in\\mathbb{N}}$ are divergent, then $(a_n+b_n)_{n\\in\\mathbb{N}}$ is divergent.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "B"
  },
  {
    question_ac_two: "True or False: Let $(a_n)_{n\\in\\mathbb{N}}$ and $(b_n)_{n\\in\\mathbb{N}}$ be convergent sequences. If $\\lim_{n\\to\\infty} a_n < \\lim_{n\\to\\infty} b_n$, then $a_n < b_n$ for all $n\\in\\mathbb{N}$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "B"
  },
  {
    question_ac_two: "True or False: Let $(a_n)_{n\\in\\mathbb{N}}$ and $(b_n)_{n\\in\\mathbb{N}}$ be convergent sequences. If $\\lim_{n\\to\\infty} a_n < \\lim_{n\\to\\infty} b_n$, then there is an $N\\in\\mathbb{N}$ such that $a_n < b_n$ for all $n\\geq N$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "True or False: Let $(a_n)_{n\\in\\mathbb{N}}$ and $(b_n)_{n\\in\\mathbb{N}}$ be convergent sequences. If $a_n < b_n$ for all $n\\in\\mathbb{N}$, then $\\lim_{n\\to\\infty} a_n < \\lim_{n\\to\\infty} b_n$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "B"
  },
  {
    question_ac_two: "True or False: Let $(a_n)_{n\\in\\mathbb{N}}$ and $(b_n)_{n\\in\\mathbb{N}}$ be convergent sequences. If there is an $N\\in\\mathbb{N}$ such that $a_n\\leq b_n$ for all $n\\geq N$, then $\\lim_{n\\to\\infty} a_n \\leq \\lim_{n\\to\\infty} b_n$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "If $a_n = 0.\\underbrace{3\\cdots 3}_{n\\text{ terms}}$ for all $n\\in\\mathbb{N}$, determine $\\lim_{n\\to\\infty}a_n$.",
    options: {
      A: "$\\sum_{n = 1}^{\\infty} \\frac{3}{10^n}$",
      B: "$3/10$",
      C: "$1/3$",
      D: "Does not exist"
    },
    answer: "A"
  },
  {
    question_ac_two: "True or False: Let $(a_n)_{n\\in\\mathbb{N}}$ and $(b_n)_{n\\in\\mathbb{N}}$ be convergent sequences. If $\\lim_{n\\to\\infty}a_n = \\lim_{n\\to\\infty}b_n = 0$, then $\\lim_{n\\to\\infty}\\frac{a_n}{b_n} =0$.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "B"
  },
  {
    question_ac_two: "Choose the WRONG equation.",
    options: {
      A: "$\\bigcap_{n=1}^\\infty [0,\\frac{1}{n}] = \\{0\\}$",
      B: "$\\bigcap_{n=1}^\\infty (0,\\frac{1}{n}] = \\varnothing$",
      C: "$\\bigcap_{n=1}^\\infty [0,\\frac{1}{n}) = \\{0\\}$",
      D: "$\\bigcap_{n=1}^\\infty (0,\\frac{1}{n}) = \\varnothing$",
      E: "None of the above."
    },
    answer: "E"
  },
  {
    question_ac_two: "Let $I_n = \\left[ \\frac{1}{n}, \\, \\frac{2}{n} \\right]$ for all $n \\in \\mathbb{N}$. What is $\\bigcap_{n=1}^{\\infty} I_n$?",
    options: {
      A: "$\\{0\\}$",
      B: "$\\varnothing$",
      C: "$(0, 0)$",
      D: "$\\{1\\}$"
    },
    answer: "B"
  },
  {
    question_ac_two: "True or False: If $(x_{n_k})_{k\\in \\mathbb{N}}$ is convergent for all proper infinite subset $\\{n_k:k\\in\\mathbb{N}\\}$ of $\\mathbb{N}$, then $(x_n)_{n\\in\\mathbb{N}}$ is convergent.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "True or False: If $(x_n)_{n\\in\\mathbb{N}}$ is bounded and divergent, then there exist two subsequences that converge to different limits.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "True or False: A sequence is convergent if and only if it is a Cauchy sequence.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "A"
  },
  {
    question_ac_two: "True or False: Every sequence has a convergent subsequence.",
    options: {
      A: "True",
      B: "False"
    },
    answer: "B"
  },
  {
    question_ac_two: "Let $x_n = \\begin{cases} 1+\\frac{2}{n+1} &\\text{if }n\\text{ is odd}\\\\ -\\frac{2}{n} &\\text{if }n\\text{ is even}\\end{cases}$ for all $n\\in\\mathbb{N}$. What is $\\limsup x_n$ and $\\liminf x_n$?",
    options: {
      A: "$\\limsup x_n = 1$ and $\\liminf x_n = -1$",
      B: "$\\limsup x_n = 2$ and $\\liminf x_n = 0$",
      C: "$\\limsup x_n = 1$ and $\\liminf x_n = 0$",
      D: "$\\limsup x_n = 2$ and $\\liminf x_n = -1$",
      E: "None of the above."
    },
    answer: "C"
  }
];


// Set up quiz and score
const container = document.getElementById("quiz-container");
const scoreBox = document.getElementById("score-summary");

// Count the answers
let answeredCount = 0;
let correctCount = 0;

// Introduction text (hide it if not needed)
//const intro = document.createElement("div");
//intro.style.marginTop = "20px";
//intro.innerHTML = `<p><b>Note.</b> Select the correct choices.</p>`;
//container.appendChild(intro);

// Loop to generate questions
questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.style.marginBottom = "40px";
  
  // Question Statement (The problem statement in Question list)
  let questionStatement = `<p><b>Q${i + 1}.</b> ${q.question_ac_two}</p>`;
  
  // Choices (A, B, C, D, E, F, G)
  ['A', 'B', 'C', 'D', 'E', 'F', 'G'].forEach(choice => {
    // A setting to check whether A, B, C, D exists (so some questions can have only 2/3 choices)
    if(q.options[choice]) {
      // Add choices using customized boxes
      questionStatement += `
        <div class="choice-container" id="q${i}-${choice}" onclick="checkAnswer(${i}, '${choice}')">
          <span class="choice-box">${choice}</span>
          <span class="choice-text">${q.options[choice]}</span>
        </div>
      `;
    }
  });

  // Add feedback (kaomoji)
  questionStatement += `<div id="feedback-${i}" style="margin-top: 10px; font-weight: normal; min-height: 25px; margin-left: 5px;"></div>`;
  
  div.innerHTML = questionStatement;
  container.appendChild(div);

  // Restore answers when reload the page
  const savedAnswer = localStorage.getItem(`question_ac_two-${i}`);
  if (savedAnswer !== null) {
    checkAnswer(i, savedAnswer, true); 
  }
});

// Set up for the function `checkAnswer`
/**
 * Handles checking the answer.
 * @param {number} index - Question index
 * @param {string} selectedChoice - 'A', 'B', 'C', or 'D'
 * @param {boolean} isRestoring - If true, we skip saving and just paint the UI
 */

function checkAnswer(index, selectedChoice, isRestoring = false) {
  const correctChoice = questions[index].answer;
  const feedback = document.getElementById(`feedback-${index}`);
  
  // Stop clicking the answered button (unless we are restoring)
  const button = document.getElementById(`q${index}-A`) || document.getElementById(`q${index}-B`);
  if (!button) return; 
  if (!isRestoring && button.classList.contains('disabled')) return;

  // Save the answer (for restoring purpose)
  if (!isRestoring) {
    localStorage.setItem(`question_ac_two-${index}`, selectedChoice);
  }

  const isCorrect = selectedChoice === correctChoice;

  // Disable clicking
  ['A', 'B', 'C', 'D', 'E', 'F', 'G'].forEach(choice => {
    const btn = document.getElementById(`q${index}-${choice}`);
    if (btn) {
      btn.classList.add('disabled');
      btn.onclick = null; 
    }
  });

  // Highlight the answer and feedback
  const selectedBtn = document.getElementById(`q${index}-${selectedChoice}`);
  if (selectedBtn) {
    if (isCorrect) {
      selectedBtn.classList.add("correct-choice");
      feedback.innerHTML = `<span>(¦3[▓▓] Correct!</span>`;
      correctCount++;
    } else {
      selectedBtn.classList.add("wrong-choice");
      // Show correct answer border (hide it if you do not want to display the correct answer)
      const correctBtn = document.getElementById(`q${index}-${correctChoice}`);
      if(correctBtn) correctBtn.style.border = "3px solid #388e3c"; 
      
      feedback.innerHTML = `<span>＼(・｀(エ)・)/ Wrong!</span>`; //  Answer was ${correctChoice}
    }
  }

  // Count for each click
  answeredCount++;

  // Final score
  if (answeredCount === questions.length) {
    let resultComment;
    const percentage = correctCount / questions.length;
    
    if (percentage === 1.0) resultComment = 'Genius Level! I love you so matcha.';
    else if (percentage >= 0.9) resultComment = 'So close! Give you a chocolatte.';
    else if (percentage >= 0.7) resultComment = 'Good Job. Give you a cookie.';
    else if (percentage >= 0.5) resultComment = 'Masih memuaskan. Kasih satu nasi lemak.';
    else resultComment = 'Hello what happen? Habis lah!';

    scoreBox.innerHTML = `<div style="font-size: 1.3em; font-weight: bold; margin-top: 50px; margin-bottom: 50px; padding: 20px; border: 2px solid #333; text-align:center;">
    You got ${correctCount} out of ${questions.length} correct.<br>
    ${resultComment}
    </div>`;
  }
}