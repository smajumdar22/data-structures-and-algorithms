'use strict';

const LinkedList = require('../lib/linkedlist.js')
const llmerge = require('../ll-merge.js')

//const test = new LinkedList();


describe('tests our linked list implementation and methods', () => {
    beforeEach(() => {
        test = new LinkedList();

    })

    it('will return NULL as head', () => {

        expect(test.head).toEqual(null);
    });

    it('will return true if a searched value exists in a linked list', () => {
        test.append(9)
        test.append(11)
        test.append(3)
        test.append(12)
        test.includes(3)
        expect(test.includes(3)).toBe(true);
    });

    it('will return false if a searched value exists in a linked list', () => {
        test.append(9)
        test.append(11)
        test.append(3)
        test.append(12)
        test.includes(3)
        expect(test.includes(4)).toBe(false);
    });

    it('will print the linked list', () => {
        test.insert(9)
        test.insert(11)
        test.insert(3)
        test.insert(12)
        expect(test.toString()).toBe('head -> {12} ->{3} ->{11} ->{9} ->X');
    });

    it('will insert the linked list', () => {
        test.insert(9)
        test.insert(11)
        test.insert(3)
        test.insert(12)
        expect(test.head.value).toEqual(12);
    });

    it('will append the linked list', () => {
        test.insert(9)
        test.insert(11)
        test.insert(3)
        test.append(12)
        expect(test.head.value).toEqual(3);
    });

    it('will return NULL as head', () => {

        expect(test.head).toEqual(null);
    });

    it('will append the linked list', () => {
        test.insert(9)
        test.insert(11)
        test.insert(3)
        test.insert(12)
        expect(test.head.next.value).toEqual(3);
    });

    
    it('will append the linked list', () => {
        test.append(1)
        test.append(2)
        test.append(3)
        test.append(4)
        expect(test.toString()).toBe('head -> {1} ->{2} ->{3} ->{4} ->X');
        const revll = reversell(test);
        //expect(revll.toString()).toBe('head -> {4} ->{3} ->{2} ->{1} ->X');
         expect(revll.head.value).toBe(4);
        // expect(revll.head.next.value).toBe(2);
        // expect(revll.head.next.next.value).toBe(3);
        // expect(revll.head.next.next.next.value).toBe(4);
       
    });

    // it('will merge two linkedlists', () => {
    //     const l1 = new LinkedList();
        
    //     l1.append(2)
    //     l1.append(3)
    //     l1.append(1)
        
    //     const l2 = new LinkedList();
    //     l2.append(4)
    //     l2.append(9)
    //     l2.append(5)

    //     const result = llmerge(l1, l2);

    //     expect(result.head.value).toBe(1);
    //     expect(result.head.next.value).toEqual(5);
        //expect(result.toString()).toBe('head -> {1} ->{5} ->{3} ->{9} ->{2} ->{4} ->X');

        // l1.insert(5);
        // l1.insert(3);
        // l1.insert(1);

        // l2.insert(6);
        // l2.insert(4);
        // l2.insert(2);

        // const mergeRes = llmerge(l1, l2);

        // expect(mergeRes.head.val).toEqual(1);
        // expect(mergeRes.head.next.val).toEqual(2);
        // expect(mergeRes.head.next.next.val).toEqual(3);
        // expect(mergeRes.head.next.next.next.val).toEqual(4);
        // expect(mergeRes.head.next.next.next.next.val).toEqual(5);
        // expect(mergeRes.head.next.next.next.next.next.val).toEqual(6);


    // });

});