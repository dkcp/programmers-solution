import java.util.*;

public class Main {
    public static void main(String[] args) {

        // 문자열
        String str = "Hello, Crafton!";
        System.out.println(str.length());
        System.out.println(str.substring(0, 5));
        System.out.println(str.substring(7, 15));
        System.out.println(str.equals("Hello, Crafton!"));

        char[] chars = str.toCharArray();
        System.out.println(chars[0]);
        for(char c : chars) System.out.print(c);
        System.out.println();

        int index = str.indexOf('C', 0);
        System.out.println(index);

        System.out.println(str.contains("Crafton"));
        System.out.println(str.matches("[A-Z][a-z]+','+' '+[A-Z][a-z]+'!'"));

        System.out.println(str.replace("Crafton", "Java"));
        System.out.println(str.replaceAll("[a-z]", "*"));

        String[] words = str.split(" ");
        for(String word : words){
            System.out.println(word);
        }

        // 리스트 정렬
        ArrayList<Integer> list = new ArrayList<>();
        list.add(5);
        list.add(3);
        list.add(8);
        Collections.sort(list);
        System.out.println(list); // [3, 5, 8]

        // 2차원 배열
        int[][] array = { {1,2,3}, {4,5,6}, {7,8,9}};
        for(int i=0; i<9; i++){
        System.out.print(array[i/3][i%3]);
        if(i%3==2) System.out.println();
        }

        // 리스트
        ArrayList<String> fruitList = new ArrayList<>();

        fruitList.add("Apple");
        fruitList.add("Banana");

        System.out.println(fruitList.get(1));

        for(String item : fruitList){
        System.out.print(item + ' ');
        }

        // 스택
        Stack<Integer> stack = new Stack<>();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        int stack_num = stack.pop();

        System.out.println(stack_num);
        System.out.println(stack);

        // 큐
        Queue<Integer> queue = new LinkedList<>();
        queue.add(10);
        queue.add(20);
        queue.add(30);
        int queue_num = queue.poll();
        System.out.println(queue_num);
        System.out.println(queue);

        // 맵
        HashMap<String, Person> map = new HashMap<>();
        map.put("Alice", new Person(90, null));
        map.put("Bob", new Person(85, "5898"));
        for (String key : map.keySet()) {
            System.out.println(map.get(key));
        }

        // // 셋
        HashSet<Integer> set = new HashSet<>();
        set.add(10);
        set.add(20);
        set.add(20);
        for(int num : set){
        System.out.println(num);
        }

        // 입력받기
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(a + b);
    }

    public static int addNumbers(int a, int b) {
        return a + b;
    }

    static class Person {
        int age;
        String phone;

        public Person(int age, String phone) {
            this.age = age;
            this.phone = phone;
        }

        public String toString() {
            return "age:" + age + ", phone:" + phone;
        }
    }
}
